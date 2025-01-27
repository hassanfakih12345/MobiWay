document.addEventListener('DOMContentLoaded', function () {
    // البيانات التي تمثل المنتجات من الأقسام المختلفة
    const electronicsProducts = [
        { name: 'Smartphone', price: '$299', imageUrl: 'path_to_electronics_image.jpg' },
        { name: 'Laptop', price: '$799', imageUrl: 'path_to_electronics_image2.jpg' }
    ];

    const perfumesProducts = [
        { name: 'Rose Perfume', price: '$49', imageUrl: 'path_to_perfume_image.jpg' },
        { name: 'Lavender Perfume', price: '$39', imageUrl: 'path_to_perfume_image2.jpg' }
    ];

    // للحصول على الحاويات الخاصة بكل صفحة
    const allProductsContainer = document.getElementById('all-products');
    const electronicsContainer = document.getElementById('electronics');
    const perfumesContainer = document.getElementById('perfumes');

    // إضافة المنتجات إلى All Products
    if (allProductsContainer) {
        const allProducts = [...electronicsProducts, ...perfumesProducts];
        allProducts.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <img src="${product.imageUrl}" alt="${product.name}" />
                <h3>${product.name}</h3>
                <p>${product.price}</p>
            `;
            allProductsContainer.appendChild(productElement);
        });
    }

    // إضافة المنتجات إلى Electronics
    if (electronicsContainer) {
        electronicsProducts.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <img src="${product.imageUrl}" alt="${product.name}" />
                <h3>${product.name}</h3>
                <p>${product.price}</p>
            `;
            electronicsContainer.appendChild(productElement);
        });
    }

    // إضافة المنتجات إلى Perfumes
    if (perfumesContainer) {
        perfumesProducts.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <img src="${product.imageUrl}" alt="${product.name}" />
                <h3>${product.name}</h3>
                <p>${product.price}</p>
            `;
            perfumesContainer.appendChild(productElement);
        });
    }
});
document.addEventListener('DOMContentLoaded', function () {
    // البيانات التي تمثل المنتجات من الأقسام المختلفة
    const electronicsProducts = {
        en: [
            { name: 'Smartphone', price: '$299', imageUrl: 'path_to_electronics_image.jpg' },
            { name: 'Laptop', price: '$799', imageUrl: 'path_to_electronics_image2.jpg' }
        ],
        ar: [
            { name: 'الهاتف الذكي', price: '$299', imageUrl: 'path_to_electronics_image.jpg' },
            { name: 'الحاسوب المحمول', price: '$799', imageUrl: 'path_to_electronics_image2.jpg' }
        ],
        fr: [
            { name: 'Smartphone', price: '$299', imageUrl: 'path_to_electronics_image.jpg' },
            { name: 'Ordinateur portable', price: '$799', imageUrl: 'path_to_electronics_image2.jpg' }
        ]
    };

    const perfumesProducts = {
        en: [
            { name: 'Rose Perfume', price: '$49', imageUrl: 'path_to_perfume_image.jpg' },
            { name: 'Lavender Perfume', price: '$39', imageUrl: 'path_to_perfume_image2.jpg' }
        ],
        ar: [
            { name: 'عطر الورد', price: '$49', imageUrl: 'path_to_perfume_image.jpg' },
            { name: 'عطر اللافندر', price: '$39', imageUrl: 'path_to_perfume_image2.jpg' }
        ],
        fr: [
            { name: 'Parfum à la rose', price: '$49', imageUrl: 'path_to_perfume_image.jpg' },
            { name: 'Parfum à la lavande', price: '$39', imageUrl: 'path_to_perfume_image2.jpg' }
        ]
    };

    const allProductsContainer = document.getElementById('all-products');
    const electronicsContainer = document.getElementById('electronics');
    const perfumesContainer = document.getElementById('perfumes');

    function loadProducts(language) {
        const allProducts = [...electronicsProducts[language], ...perfumesProducts[language]];

        if (allProductsContainer) {
            allProductsContainer.innerHTML = '';
            allProducts.forEach(product => {
                const productElement = document.createElement('div');
                productElement.classList.add('product');
                productElement.innerHTML = `
                    <img src="${product.imageUrl}" alt="${product.name}" />
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                `;
                allProductsContainer.appendChild(productElement);
            });
        }

        if (electronicsContainer) {
            electronicsContainer.innerHTML = '';
            electronicsProducts[language].forEach(product => {
                const productElement = document.createElement('div');
                productElement.classList.add('product');
                productElement.innerHTML = `
                    <img src="${product.imageUrl}" alt="${product.name}" />
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                `;
                electronicsContainer.appendChild(productElement);
            });
        }

        if (perfumesContainer) {
            perfumesContainer.innerHTML = '';
            perfumesProducts[language].forEach(product => {
                const productElement = document.createElement('div');
                productElement.classList.add('product');
                productElement.innerHTML = `
                    <img src="${product.imageUrl}" alt="${product.name}" />
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                `;
                perfumesContainer.appendChild(productElement);
            });
        }
    }

    const languageSelect = document.getElementById('language-select');
    languageSelect.addEventListener('change', function() {
        const selectedLanguage = this.value;
        loadProducts(selectedLanguage);
    });

    // تحميل المنتجات باللغة الإنجليزية بشكل افتراضي
    loadProducts('en');
});
