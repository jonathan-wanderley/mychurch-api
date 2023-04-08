-- CreateTable
CREATE TABLE "person_profile" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "photo" TEXT NOT NULL,
    "birth_date" TIMESTAMP(3) NOT NULL,
    "cpf" TEXT NOT NULL,
    "rg" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "marital_status" TEXT NOT NULL,
    "occupation" TEXT NOT NULL,
    "father" TEXT NOT NULL,
    "mother" TEXT NOT NULL,
    "church_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "person_profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "person_contact" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "person_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "person_contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PersonMinistry" (
    "id" TEXT NOT NULL,
    "ministries" TEXT NOT NULL,
    "departments" TEXT NOT NULL,
    "titles" TEXT[],
    "functions" TEXT[],
    "converted" BOOLEAN NOT NULL,
    "baptized_in_water" BOOLEAN NOT NULL,
    "person_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PersonMinistry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "person_contact_person_id_key" ON "person_contact"("person_id");

-- CreateIndex
CREATE UNIQUE INDEX "PersonMinistry_person_id_key" ON "PersonMinistry"("person_id");

-- AddForeignKey
ALTER TABLE "person_profile" ADD CONSTRAINT "person_profile_church_id_fkey" FOREIGN KEY ("church_id") REFERENCES "church_profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "person_contact" ADD CONSTRAINT "person_contact_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "person_profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonMinistry" ADD CONSTRAINT "PersonMinistry_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "person_profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
