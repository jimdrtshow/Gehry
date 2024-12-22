import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function DELETE(req: NextRequest) {
    try {
        // Récupérer l'ID à partir de l'URL dynamique (si l'ID est dans l'URL de la route)
        const url = new URL(req.url);
        const id = url.pathname.split('/').pop();  // Extraire l'ID de l'URL

        if (!id) {
            return NextResponse.json({ message: 'ID is required' }, { status: 400 });
        }

        // Supprimer le service dans la base de données avec Prisma
        await prisma.service.delete({
            where: { id }, // Prisma attend une chaîne pour l'ID
        });

        return NextResponse.json({ message: 'Service deleted successfully' }, { status: 200 });
    } catch (error) {
        console.error(error);

        // Gestion des erreurs
        return NextResponse.json(
            { message: 'Failed to delete service' },
            { status: 500 }
        );
    }
}
