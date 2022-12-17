import prisma from "../db"


// get all product
export const getProducts = async (req: any, res: any, next: any) => {
    const user: any = await prisma.user.findUnique({
        where: {
            id: req.user.id
        },
        include: {
            Product: true
        }
    })
    res.json({ data: user.Product })
}

// get one product
export const getOneProduct = async (req: any, res: any) => {
    const id = req.param.id

    const product: any = await prisma.product.findFirst({
        where: {
            id,
            belongsToId: req.user.id
        }
    })
    res.json({ data: product })

}

// create new product
export const createProduct = async (req: any, res: any) => {
    const product = await prisma.product.create({
        data: {
            name: req.body.name,
            belongsToId: req.user.id
        }
    })
    res.json({ data: product })
}

// update the product
export const updateProduct = async (req: any, res: any) => {
    const update = await prisma.product.update({
        where: {
            id_belongsToId: {
                id: req.param.id,
                belongsToId: req.user.id
            }
        },
        data: {
            name: req.body.name
        }
    })
    res.json({ data: update })
}

// delete existing product
export const deleteProduct = async (req: any, res: any) => {
    const deleted = await prisma.product.delete({
        where: {
            id_belongsToId: {
                id: req.param.id,
                belongsToId: req.user.id
            }
        }
    })

    res.json({ data: deleted })

}







