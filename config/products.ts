const products = [
    {
        name:'24 Mantra Organic Low Gi Rice',
        unit: '5 kg',
        price: 750,
        discountedPrice: 563,
        discount: 24,
        company: '24 Mantra',
        subcategory: 'top-picks',
        category: 'atta-rice-oils-dals',
        img1: '/products/atta/TopPicks/1/1.webp',
        description: 'Cook healthy and delicious meals with 24 Mantra Organic Low Gi Rice. Made from premium quality organic rice, this low glycemic index rice is perfect for maintaining blood sugar levels and promoting overall health. Whether used in pilafs, stir-fries, or curries, 24 Mantra Organic Low Gi Rice is sure to impress with its fluffy texture and authentic taste. Stock up on this essential ingredient and enjoy the benefits of low GI rice in your favorite recipes.',
        origin: 'India',
        life: '12 months',
        manufacturer: 'Sresta Natural Bioproducts Pvt. Ltd.'
    },
    {
        name:'Pansari Kuttu Atta - Buckwheat Millet',
        unit: '500 g',
        price: 160,
        discountedPrice: 111,
        discount: 30,
        company: 'Pansari',
        subcategory: 'top-picks',
        category: 'atta-rice-oils-dals',
        img1: '/products/atta/TopPicks/2/1.webp',
        description: "Cook delicious and nutritious meals with Pansari Kuttu Atta - Buckwheat Millet. This premium quality buckwheat flour is perfect for making rotis, pancakes, and other baked goods, offering a rich and nutty flavor to your recipes. Sourced from trusted farmers, it offers superior taste and nutrition. Whether you're cooking traditional Indian cuisine or experimenting with new flavors, Pansari Kuttu Atta is sure to impress!",
        origin: 'India',
        life: '122 days',
        manufacturer: 'Pansari Industry Private Limited'
    },
    {
        name:'Oleev Extra Light Olive Oil - Frying Sauteing & Grilling (Bottle)',
        unit: '500 g',
        price: 2899,
        discountedPrice: 1853,
        discount: 36,
        company: 'Oleev',
        subcategory: 'top-picks',
        category: 'atta-rice-oils-dals',
        img1: '/products/atta/TopPicks/3/1.webp',
        description: 'Cook healthy and delicious meals with 24 Mantra Organic Low Gi Rice. Made from premium quality organic rice, this low glycemic index rice is perfect for maintaining blood sugar levels and promoting overall health. Whether used in pilafs, stir-fries, or curries, 24 Mantra Organic Low Gi Rice is sure to impress with its fluffy texture and authentic taste. Stock up on this essential ingredient and enjoy the benefits of low GI rice in your favorite recipes.',
        origin: 'India',
        life: '12 months',
        manufacturer: 'Sresta Natural Bioproducts Pvt. Ltd.'
    },
]

export const updateProducts = (category:string,subcategory:string,setProduct)=>{
    const categoryProducts = products.filter(item=>{
        return item.category === category
    })
    const subcategoryProducts = categoryProducts.filter(item=>{
        return item.subcategory === subcategory
    })
    return setProduct(subcategoryProducts)
}

export const getProduct = (product:string,setProduct)=>{
    const productNew = products.filter(item=>{
        return item.name === product
    })
    const productDetails = productNew[0]
    return setProduct(productDetails)
}