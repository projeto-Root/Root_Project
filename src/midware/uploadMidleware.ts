import { Request, Response } from 'express'
const path = require('path')
const multer = require("multer")


const storage = multer.diskStorage({
    destination: (req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) => {
        cb(null, 'image'); // Specify the destination folder here
    },
    filename: (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const extname = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + extname);
    },
});
export const uploadArray = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (
        req: Request,
        file: Express.Multer.File, // Added type for file parameter
        cb: (error: Error | null, acceptFile: boolean) => void // Added type for cb parameter
    ) => {
        const fileTypes = /jpeg|jpg|png|gif/;
        const mimeType = fileTypes.test(file.mimetype);
        const extname = fileTypes.test(path.extname(file.originalname));

        if (mimeType && extname) {
            return cb(null, true);
        }
        cb(new Error('Only JPEG, JPG, PNG, or GIF files are allowed'), false);
    },
}).array('file');

export const uploadSingle = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (
        req: Request,
        file: Express.Multer.File, // Added type for file parameter
        cb: (error: Error | null, acceptFile: boolean) => void // Added type for cb parameter
    ) => {
        const fileTypes = /jpeg|jpg|png|gif/;
        const mimeType = fileTypes.test(file.mimetype);
        const extname = fileTypes.test(path.extname(file.originalname));

        if (mimeType && extname) {
            return cb(null, true);
        }
        cb(new Error('Only JPEG, JPG, PNG, or GIF files are allowed'), false);
    },
}).single('file');