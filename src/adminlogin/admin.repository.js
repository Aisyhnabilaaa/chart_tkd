const prisma = require("../db")

async function createAdmin(adminData){
    try{
        const newAdmin = await prisma.admin.create({data : adminData})
        return newAdmin
    } catch (error) {
        console.error('Error saat membuat admin:', error);
        throw new Error('Gagal membuat Admin di repository')
    }
}

async function findAdminByEmail(email) {
    return await prisma.admin.findUnique({ where: { email } });
}

async function updateAdminPassword(email, newKode) {
    try {
        const updatedAdmin = await prisma.admin.update({
            where: { email },
            data: { kode: newKode }, // Gantilah 'password' dengan nama field yang sesuai
        });
        return updatedAdmin;
    } catch (error) {
        console.error('Error saat mengubah kata sandi:', error);
        throw new Error('Gagal mengubah kata sandi di repository');
    }
}

module.exports = { createAdmin, findAdminByEmail, updateAdminPassword };