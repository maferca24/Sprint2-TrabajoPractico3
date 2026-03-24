//Archivo de configuración conexión centralizada a MongoDB,permite que la aplicación tenga una única instancia de conexión 
// que puede ser utlizada en cualquier parte del proyecto
import mongoose from 'mongoose';

export async function connetDB(){
    try {
        await mongoose.connect('mongodb+srv://grupo-04:grupo-04@cluster0.blryo.mongodb.net/NodeMod3Cohorte5');
        console.log('Conexión exitosa a MongoDB');
        
    } catch (error) {
        console.error ('Error al conectar a MongoDB:',error);
        process.exit(1);
    }
}