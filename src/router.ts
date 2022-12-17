import { getOneProduct, getProducts, createProduct, deleteProduct, updateProduct } from './handlers/product';
import { Router } from "express";
import { body } from "express-validator";
import { handleInputErrors } from "./modules/middleware";

const router = Router();

// product routes

router.get('/product', getProducts)
router.get('/product/:id', getOneProduct)
router.put('/product/:id', body('name').isString(), handleInputErrors, updateProduct)
router.post('/product', body('name').isString(), handleInputErrors, createProduct)
router.delete('/product/:id', deleteProduct)

//upload routes
router.get('/update/:id', (req, res) => { })
router.put('/update/:id',
    body('title').optional(),
    body('body').optional(),
    body('status').isIn(['IN_PROGRESS', 'LIVE', 'DEPRECATED']),
    body('version').optional(),
    () => {

    })


router.post('/update',
    body('title').exists().isString(),
    body('body').exists().isString(),
    () => {

    })


router.delete('/update/:id', (req, res) => { })


//update points
router.get('/updatepoint', (req, res) => { })
router.get('/updatepoint/:id', (req, res) => { })
router.put('/updatepoint/:id',
    body('name').optional().isString(),
    body('description').optional().isString(),
    (req, res) => {

    })

router.post('/updatepoint',
    body('name').isString(),
    body('description').isString(),
    body('updateId').optional().isString(),
    (req, res) => {

    })

router.delete('/updatepoint/:id', (req, res) => { })


export default router;