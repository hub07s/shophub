// E-commerce Application JavaScript

// Application State
const appState = {
    currentPage: 'home',
    cart: [],
    currentProduct: null,
    filteredProducts: [],
    searchQuery: ''
};

// Product Data with actual images
const products = [
    {
        id: 1,
        name: "Modern Smartphone",
        price: 699.99,
        category: "Electronics",
        image: "https://pplx-res.cloudinary.com/image/upload/v1757689766/pplx_project_search_images/36bc37d9c440c34bbd96894e822d2b7b25e16e2c.png",
        description: "Latest smartphone with advanced features, high-resolution display, and long-lasting battery. Perfect for everyday use and professional photography.",
        inStock: true,
        specifications: {
            "Display": "6.1-inch OLED",
            "Storage": "128GB",
            "Camera": "48MP Main + 12MP Ultra Wide",
            "Battery": "3200mAh"
        }
    },
    {
        id: 2,
        name: "Wireless Earbuds",
        price: 149.99,
        category: "Electronics",
        image: "https://pplx-res.cloudinary.com/image/upload/v1758711491/pplx_project_search_images/4c69d6209894406e728752c6051658ce83e1591b.png",
        description: "Premium wireless earbuds with noise cancellation, crystal clear audio, and comfortable fit for all-day wear.",
        inStock: true,
        specifications: {
            "Battery Life": "24 hours with case",
            "Connectivity": "Bluetooth 5.0",
            "Features": "Noise Cancellation, Touch Controls",
            "Water Rating": "IPX4"
        }
    },
    {
        id: 3,
        name: "Varsity Jacket",
        price: 89.99,
        category: "Clothing",
        image: "https://pplx-res.cloudinary.com/image/upload/v1755270575/pplx_project_search_images/8ca8638ad259b97ca10285b4c9e42bde216901d4.png",
        description: "Stylish varsity jacket with premium leather sleeves and diamond pattern design. Perfect for casual and semi-formal occasions.",
        inStock: true,
        specifications: {
            "Material": "Cotton blend with leather sleeves",
            "Colors": "Blue and Cream",
            "Sizes": "S, M, L, XL",
            "Care": "Dry clean only"
        }
    },
    {
        id: 4,
        name: "Graphic T-Shirt",
        price: 24.99,
        category: "Clothing",
        image: "https://pplx-res.cloudinary.com/image/upload/v1755232794/pplx_project_search_images/3cf31c2787dd19a8af7be077bb38e8d8d02f6e19.png",
        description: "Comfortable cotton t-shirt with unique graphic design. High-quality print that won't fade after washing.",
        inStock: true,
        specifications: {
            "Material": "100% Cotton",
            "Fit": "Regular",
            "Sizes": "XS, S, M, L, XL, XXL",
            "Care": "Machine washable"
        }
    },
    {
        id: 5,
        name: "Purple Wireless Earbuds",
        price: 199.99,
        category: "Electronics",
        image: "https://pplx-res.cloudinary.com/image/upload/v1755590862/pplx_project_search_images/d5858844037454317d047e46be488f9f263b1f9f.png",
        description: "Premium Beats wireless earbuds with secure fit hooks and superior sound quality. Perfect for workouts and daily use.",
        inStock: true,
        specifications: {
            "Brand": "Beats",
            "Battery Life": "15 hours",
            "Features": "Secure-fit ear hooks, Water resistant",
            "Colors": "Purple, Black, White available"
        }
    },
    {
        id: 6,
        name: "Fashion Collection",
        price: 159.99,
        category: "Clothing",
        image: "https://pplx-res.cloudinary.com/image/upload/v1755150706/pplx_project_search_images/128341bb2b03c8913bb98c738d795d615e18c46d.png",
        description: "Curated collection of stylish clothing items including tops, shirts, and casual wear in trending colors.",
        inStock: true,
        specifications: {
            "Items": "5-piece collection",
            "Material": "Mixed fabrics",
            "Sizes": "Available in all sizes",
            "Style": "Contemporary casual"
        }
    },
    {
        id: 7,
        name: "Professional Laptop",
        price: 1299.99,
        category: "Electronics",
        image: "https://pplx-res.cloudinary.com/image/upload/v1754938557/pplx_project_search_images/6df0c38509e94971df67e6b30c414c0a17a557b0.png",
        description: "High-performance laptop perfect for professional work, content creation, and multimedia editing.",
        inStock: true,
        specifications: {
            "Processor": "Intel i7",
            "RAM": "16GB",
            "Storage": "512GB SSD",
            "Display": "15.6-inch 4K"
        }
    },
    {
        id: 8,
        name: "Black Wireless Earbuds",
        price: 129.99,
        category: "Electronics",
        image: "https://pplx-res.cloudinary.com/image/upload/v1758711491/pplx_project_search_images/4c69d6209894406e728752c6051658ce83e1591b.png",
        description: "Sleek black wireless earbuds with charging case and blue accent lighting. Premium sound quality and comfortable fit.",
        inStock: true,
        specifications: {
            "Design": "In-ear with blue LED accents",
            "Charging": "Wireless charging case",
            "Battery": "6 hours + 18 hours with case",
            "Features": "Touch controls, Voice assistant"
        }
    },
    {
        id: 9,
        name: "Casual Sneakers",
        price: 79.99,
        category: "Footwear",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23666' font-size='16'%3ESneakers%3C/text%3E%3C/svg%3E",
        description: "Comfortable casual sneakers perfect for everyday wear, sports, and outdoor activities.",
        inStock: true,
        specifications: {
            "Material": "Canvas and synthetic leather",
            "Sole": "Rubber with cushioning",
            "Colors": "Multiple colors available",
            "Sizes": "US 6-12 available"
        }
    },
    {
        id: 10,
        name: "Designer Watch",
        price: 299.99,
        category: "Accessories",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23666' font-size='16'%3EWatch%3C/text%3E%3C/svg%3E",
        description: "Elegant designer watch with premium materials and precise movement. Perfect for business and formal occasions.",
        inStock: true,
        specifications: {
            "Movement": "Swiss Quartz",
            "Case": "Stainless steel",
            "Strap": "Leather",
            "Water Resistance": "50m"
        }
    },
    {
        id: 11,
        name: "Bluetooth Speaker",
        price: 89.99,
        category: "Electronics",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23666' font-size='16'%3ESpeaker%3C/text%3E%3C/svg%3E",
        description: "Portable Bluetooth speaker with powerful bass and crystal clear sound. Perfect for parties and outdoor activities.",
        inStock: true,
        specifications: {
            "Battery Life": "12 hours",
            "Connectivity": "Bluetooth 5.0, AUX, USB",
            "Features": "Waterproof, Voice Assistant",
            "Output": "20W stereo sound"
        }
    },
    {
        id: 12,
        name: "Denim Jacket",
        price: 69.99,
        category: "Clothing",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23666' font-size='16'%3EDenim Jacket%3C/text%3E%3C/svg%3E",
        description: "Classic denim jacket with modern fit and premium wash. Versatile piece that goes with any outfit.",
        inStock: false,
        specifications: {
            "Material": "100% Cotton Denim",
            "Wash": "Stone washed",
            "Fit": "Regular fit",
            "Details": "Button closure, chest pockets"
        }
    }
];

// Categories Data
const categories = [
    {id: 1, name: "Electronics", count: 6, icon: "📱"},
    {id: 2, name: "Clothing", count: 4, icon: "👔"},
    {id: 3, name: "Footwear", count: 1, icon: "👟"},
    {id: 4, name: "Accessories", count: 1, icon: "⌚"}
];

// DOM Elements
const elements = {
    // Navigation
    navLinks: document.querySelectorAll('.nav__link'),
    menuToggle: document.getElementById('menuToggle'),
    
    // Search
    searchInput: document.getElementById('searchInput'),
    searchBtn: document.getElementById('searchBtn'),
    
    // Cart
    cartBtn: document.getElementById('cartBtn'),
    cartBadge: document.getElementById('cartBadge'),
    cartSidebar: document.getElementById('cartSidebar'),
    cartOverlay: document.getElementById('cartOverlay'),
    closeSidebar: document.getElementById('closeSidebar'),
    cartContent: document.getElementById('cartContent'),
    cartTotal: document.getElementById('cartTotal'),
    
    // Pages
    pages: document.querySelectorAll('.page'),
    homepage: document.getElementById('homepage'),
    productsPage: document.getElementById('products-page'),
    productDetail: document.getElementById('product-detail'),
    
    // Content containers
    featuredProducts: document.getElementById('featuredProducts'),
    categoriesGrid: document.getElementById('categoriesGrid'),
    allProducts: document.getElementById('allProducts'),
    productDetailContent: document.getElementById('productDetailContent'),
    
    // Filters
    categoryFilter: document.getElementById('categoryFilter'),
    sortSelect: document.getElementById('sortSelect'),
    
    // Back button
    backBtn: document.getElementById('backBtn')
};

// Utility Functions
function formatPrice(price) {
    return `$${price.toFixed(2)}`;
}

function getCartItemCount() {
    return appState.cart.reduce((total, item) => total + item.quantity, 0);
}

function getCartTotal() {
    return appState.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Cart Functions
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.inStock) return;

    const existingItem = appState.cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        appState.cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }
    
    updateCartUI();
}

function removeFromCart(productId) {
    appState.cart = appState.cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateCartQuantity(productId, quantity) {
    const item = appState.cart.find(item => item.id === productId);
    if (item) {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = quantity;
            updateCartUI();
        }
    }
}

function updateCartUI() {
    elements.cartBadge.textContent = getCartItemCount();
    renderCartItems();
    elements.cartTotal.textContent = getCartTotal().toFixed(2);
}

function renderCartItems() {
    if (appState.cart.length === 0) {
        elements.cartContent.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        return;
    }
    
    elements.cartContent.innerHTML = appState.cart.map(item => `
        <div class="cart-item">
            <div class="cart-item__image" style="background-image: url('${item.image}')"></div>
            <div class="cart-item__info">
                <div class="cart-item__title">${item.name}</div>
                <div class="cart-item__price">${formatPrice(item.price)}</div>
                <div class="cart-item__controls">
                    <div class="cart-item__quantity">
                        <button class="cart-quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <span>${item.quantity}</span>
                        <button class="cart-quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                    <button class="cart-item__remove" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Product Rendering Functions
function createProductCard(product) {
    const stockClass = product.inStock ? '' : 'out-of-stock';
    const stockText = product.inStock ? '' : '<div class="stock-status status--error">Out of Stock</div>';
    
    return `
        <div class="product-card ${stockClass}">
            <div class="product-card__image" style="background-image: url('${product.image}')" onclick="showProductDetail(${product.id})"></div>
            <div class="product-card__content">
                <h3 class="product-card__title" onclick="showProductDetail(${product.id})" style="cursor: pointer;">${product.name}</h3>
                <div class="product-card__price">${formatPrice(product.price)}</div>
                ${stockText}
                <div class="product-card__actions">
                    <button class="btn btn--primary btn-add-cart" ${!product.inStock ? 'disabled' : ''} onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>
                    <button class="btn btn--outline btn-view-details" onclick="showProductDetail(${product.id})">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    `;
}

function createCategoryCard(category) {
    return `
        <div class="category-card" onclick="filterByCategory('${category.name}')">
            <div class="category-card__icon">${category.icon}</div>
            <h3 class="category-card__title">${category.name}</h3>
            <p class="category-card__count">${category.count} items</p>
        </div>
    `;
}

// Page Functions
function showPage(pageId) {
    // Update navigation
    elements.navLinks.forEach(link => link.classList.remove('active'));
    const activeLink = document.querySelector(`[data-page="${pageId}"]`);
    if (activeLink) activeLink.classList.add('active');
    
    // Update pages
    elements.pages.forEach(page => page.classList.remove('active'));
    
    let targetPage;
    if (pageId === 'home') {
        targetPage = elements.homepage;
    } else if (pageId === 'products') {
        targetPage = elements.productsPage;
        // Reset filters when navigating to products page
        resetFilters();
    } else if (pageId === 'product-detail') {
        targetPage = elements.productDetail;
    } else if (pageId === 'categories') {
        // Show products page but filter to show categories
        targetPage = elements.productsPage;
        pageId = 'products';
        // Reset filters when navigating to categories page
        resetFilters();
    }
    
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    appState.currentPage = pageId;
    
    // Load page content
    if (pageId === 'products') {
        renderAllProducts();
    }
}

function resetFilters() {
    // Clear search query
    appState.searchQuery = '';
    elements.searchInput.value = '';
    
    // Reset category filter
    if (elements.categoryFilter) {
        elements.categoryFilter.value = '';
    }
    
    // Reset sort filter
    if (elements.sortSelect) {
        elements.sortSelect.value = 'name';
    }
}

function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    appState.currentProduct = product;
    
    const stockClass = product.inStock ? '' : 'out-of-stock';
    const stockText = product.inStock ? '' : '<div class="stock-status status--error">Out of Stock</div>';
    
    elements.productDetailContent.innerHTML = `
        <div class="product-detail ${stockClass}">
            <div class="product-detail__image" style="background-image: url('${product.image}')"></div>
            <div class="product-detail__info">
                <h1 class="product-detail__title">${product.name}</h1>
                <div class="product-detail__price">${formatPrice(product.price)}</div>
                ${stockText}
                <p class="product-detail__description">${product.description}</p>
                
                <div class="product-detail__specs">
                    <h4>Specifications</h4>
                    <div class="specs-list">
                        ${Object.entries(product.specifications).map(([key, value]) => `
                            <div class="spec-item">
                                <strong>${key}:</strong>
                                <span>${value}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="product-detail__actions">
                    <div class="quantity-selector">
                        <button class="quantity-btn" onclick="changeQuantity(-1)">-</button>
                        <input type="number" class="quantity-input" id="quantityInput" value="1" min="1" max="10">
                        <button class="quantity-btn" onclick="changeQuantity(1)">+</button>
                    </div>
                    <button class="btn btn--primary" ${!product.inStock ? 'disabled' : ''} onclick="addToCartWithQuantity()">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Show the product detail page
    elements.pages.forEach(page => page.classList.remove('active'));
    elements.productDetail.classList.add('active');
    appState.currentPage = 'product-detail';
    
    // Update navigation
    elements.navLinks.forEach(link => link.classList.remove('active'));
}

function changeQuantity(delta) {
    const input = document.getElementById('quantityInput');
    const newValue = parseInt(input.value) + delta;
    if (newValue >= 1 && newValue <= 10) {
        input.value = newValue;
    }
}

function addToCartWithQuantity() {
    if (!appState.currentProduct) return;
    const quantity = parseInt(document.getElementById('quantityInput').value) || 1;
    addToCart(appState.currentProduct.id, quantity);
}

// Search and Filter Functions
function searchProducts(query) {
    appState.searchQuery = query.toLowerCase();
    applyFilters();
}

function filterByCategory(categoryName) {
    elements.categoryFilter.value = categoryName;
    showPage('products');
    applyFilters();
}

function applyFilters() {
    let filtered = [...products];
    
    // Apply search filter
    if (appState.searchQuery) {
        filtered = filtered.filter(product =>
            product.name.toLowerCase().includes(appState.searchQuery) ||
            product.description.toLowerCase().includes(appState.searchQuery) ||
            product.category.toLowerCase().includes(appState.searchQuery)
        );
    }
    
    // Apply category filter
    const categoryFilter = elements.categoryFilter ? elements.categoryFilter.value : '';
    if (categoryFilter) {
        filtered = filtered.filter(product => product.category === categoryFilter);
    }
    
    // Apply sorting
    const sortValue = elements.sortSelect ? elements.sortSelect.value : 'name';
    switch (sortValue) {
        case 'price-low':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'name':
        default:
            filtered.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }
    
    appState.filteredProducts = filtered;
    renderFilteredProducts();
}

function renderFilteredProducts() {
    const container = appState.currentPage === 'products' ? elements.allProducts : elements.featuredProducts;
    if (!container) return;
    
    if (appState.filteredProducts.length === 0) {
        container.innerHTML = '<div class="empty-results" style="text-align: center; padding: 2rem; color: var(--color-text-secondary);">No products found</div>';
    } else {
        container.innerHTML = appState.filteredProducts.map(createProductCard).join('');
    }
}

// Initial Rendering Functions
function renderFeaturedProducts() {
    const featured = products.filter(p => p.inStock).slice(0, 6);
    elements.featuredProducts.innerHTML = featured.map(createProductCard).join('');
}

function renderAllProducts() {
    // Always start with all products and then apply filters
    appState.filteredProducts = [...products];
    applyFilters();
}

function renderCategories() {
    elements.categoriesGrid.innerHTML = categories.map(createCategoryCard).join('');
}

function populateCategoryFilter() {
    if (!elements.categoryFilter) return;
    const options = categories.map(cat => `<option value="${cat.name}">${cat.name}</option>`).join('');
    elements.categoryFilter.innerHTML = '<option value="">All Categories</option>' + options;
}

// Event Listeners
function initEventListeners() {
    // Navigation
    elements.navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.target.dataset.page;
            if (page) {
                showPage(page);
            }
        });
    });
    
    // Search
    if (elements.searchBtn) {
        elements.searchBtn.addEventListener('click', () => {
            const query = elements.searchInput.value.trim();
            searchProducts(query);
            showPage('products');
        });
    }
    
    if (elements.searchInput) {
        elements.searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = e.target.value.trim();
                searchProducts(query);
                showPage('products');
            }
        });
    }
    
    // Cart sidebar
    if (elements.cartBtn) {
        elements.cartBtn.addEventListener('click', () => {
            elements.cartSidebar.classList.add('open');
            elements.cartOverlay.classList.add('active');
        });
    }
    
    if (elements.closeSidebar) {
        elements.closeSidebar.addEventListener('click', closeCart);
    }
    
    if (elements.cartOverlay) {
        elements.cartOverlay.addEventListener('click', closeCart);
    }
    
    // Filters
    if (elements.categoryFilter) {
        elements.categoryFilter.addEventListener('change', applyFilters);
    }
    
    if (elements.sortSelect) {
        elements.sortSelect.addEventListener('change', applyFilters);
    }
    
    // Back button
    if (elements.backBtn) {
        elements.backBtn.addEventListener('click', () => {
            showPage('products');
        });
    }
    
    // Hero CTA
    const heroCta = document.querySelector('.hero__cta');
    if (heroCta) {
        heroCta.addEventListener('click', () => {
            showPage('products');
        });
    }
}

function closeCart() {
    elements.cartSidebar.classList.remove('open');
    elements.cartOverlay.classList.remove('active');
}

// Global functions for onclick handlers
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartQuantity = updateCartQuantity;
window.showProductDetail = showProductDetail;
window.filterByCategory = filterByCategory;
window.changeQuantity = changeQuantity;
window.addToCartWithQuantity = addToCartWithQuantity;

// Initialize Application
function init() {
    initEventListeners();
    populateCategoryFilter();
    renderFeaturedProducts();
    renderCategories();
    updateCartUI();
    
    // Show homepage by default
    showPage('home');
}

// Start the application when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}