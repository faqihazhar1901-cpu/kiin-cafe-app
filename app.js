const menuData = [
  {
    category: "White Coffee",
    items: [
      { id: "wc1", name: "Kopi Susu Rahayu", price: 20000, description: "Ice Only" },
      { id: "wc2", name: "Kopi Susu Kiin", price: 20000, description: "Ice Only" },
      { id: "wc3", name: "Kopi Susu Rum", price: 20000, description: "Ice Only" },
      { id: "wc4", name: "Kopi Susu Gula Aren", price: 20000, description: "Ice Only" },
      { id: "wc5", name: "Caramel Macchiato", price: 22000, description: "Ice Only" },
      { id: "wc6", name: "Dirty Latte", price: 23000, description: "Ice Only" },
      { id: "wc7", name: "Cafe Latte", price: 20000, description: "Hot / Ice" },
      { id: "wc8", name: "Cappucino", price: 20000, description: "Hot Only" },
      { id: "wc9", name: "Caramel Latte", price: 22000, description: "Hot / Ice" },
      { id: "wc10", name: "Vanilla Latte", price: 22000, description: "Hot / Ice" },
      { id: "wc11", name: "Oat Milk Latte", price: 24000, description: "Hot / Ice" },
    ]
  },
  {
    category: "Black Coffee",
    items: [
      { id: "bc1", name: "Espresso", price: 15000 },
      { id: "bc2", name: "Long Black / Americano", price: 18000, description: "Hot / Ice" },
      { id: "bc3", name: "Shaken Americano", price: 20000, description: "Lychee, Lemon, Strawberry, Mango" },
      { id: "bc4", name: "Orange Americano", price: 22000 },
    ]
  },
  {
    category: "Manual Brew",
    items: [
      { id: "mb1", name: "Vietnam Drip", price: 15000 },
      { id: "mb2", name: "Filter", price: 22000, description: "Hot / Ice" },
    ]
  },
  {
    category: "Milk Based",
    items: [
      { id: "mlk1", name: "Susu Rum Regal", price: 22000 },
      { id: "mlk2", name: "Ovaltine", price: 22000, description: "Hot / Ice" },
      { id: "mlk3", name: "Matcha", price: 25000, description: "Hot / Ice" },
      { id: "mlk4", name: "Matcha Oat Latte", price: 25000 },
      { id: "mlk5", name: "Korean Strawberry Milk", price: 23000 },
    ]
  },
  {
    category: "Yakult",
    items: [
      { id: "yk1", name: "Mango Yakult", price: 18000 },
      { id: "yk2", name: "Lychee Yakult", price: 18000 },
      { id: "yk3", name: "Strawberry Yakult", price: 18000 },
    ]
  },
  {
    category: "Tea",
    items: [
      { id: "t1", name: "Black Tea", price: 15000, description: "Hot / Ice. Free refill air panas untuk hot." },
      { id: "t2", name: "Lemon Tea", price: 16000, description: "Hot / Ice" },
      { id: "t3", name: "Mango Tea", price: 16000, description: "Hot / Ice" },
      { id: "t4", name: "Lychee Tea", price: 16000, description: "Hot / Ice" },
      { id: "t5", name: "Strawberry Tea", price: 16000, description: "Hot / Ice" },
    ]
  },
  {
    category: "Frappe",
    items: [
      { id: "fp1", name: "Caramel Popcorn", price: 23000 },
      { id: "fp2", name: "Vanilla Cream", price: 23000 },
      { id: "fp3", name: "Cookies N Cream", price: 23000 },
      { id: "fp4", name: "Greentea Frappucino", price: 23000 },
      { id: "fp5", name: "Javachip Frappucino", price: 23000 },
    ]
  },
  {
    category: "Noodles",
    items: [
      { id: "nd1", name: "Indomie Original", price: 10000, description: "Goreng / Rebus" },
      { id: "nd2", name: "Indomie Telur", price: 13000 },
      { id: "nd3", name: "Indomie Akhir Bulan", price: 15000, description: "Mie + Nasi" },
      { id: "nd4", name: "Indomie Double", price: 20000, description: "2 Bungkus" },
    ]
  },
  {
    category: "Food",
    items: [
      { id: "fd1", name: "Chicken Karagedon", price: 25000 },
      { id: "fd2", name: "Cheesy Karage", price: 25000 },
      { id: "fd3", name: "Chicken Karage Mentai", price: 26000 },
      { id: "fd4", name: "Chicken Karage Sambal Matah", price: 26000 },
      { id: "fd5", name: "Spicy Beef Sliced", price: 26000 },
      { id: "fd6", name: "Beef Sliced Bulgogi with Egg", price: 29000 },
      { id: "fd7", name: "Spaghetti Bolognese", price: 20000 },
    ]
  },
  {
    category: "Snack Savory",
    items: [
      { id: "snv1", name: "French Fries Bolognese", price: 18000 },
      { id: "snv2", name: "Cheesy Fries", price: 18000 },
      { id: "snv3", name: "Tahu Susu", price: 18000 },
      { id: "snv4", name: "Cireng", price: 20000 },
      { id: "snv5", name: "Mix Fries", price: 20000 },
      { id: "snv6", name: "Sistagor", price: 20000 },
      { id: "snv7", name: "Dimsum (Isi 5)", price: 22000 },
      { id: "snv8", name: "Siomay Goreng (Isi 5)", price: 22000 },
      { id: "snv9", name: "Dimsum Mentai (Isi 5)", price: 27000 },
    ]
  },
  {
    category: "Snack Sweet",
    items: [
      { id: "sw1", name: "Donat Salju", price: 8000, description: "Personal" },
      { id: "sw2", name: "Donat", price: 9000, description: "Personal. Greentea / Coklat / Tiramisu" },
      { id: "sw3", name: "Keju Aroma", price: 20000, description: "Isi 10. Sharing" },
      { id: "sw4", name: "Churros", price: 20000, description: "Isi 10. Sharing. Coklat / Tiramisu / Greentea" },
    ]
  }
];

// State
let cart = [];
let activeCategory = menuData[0].category;

// Elements
const categoryNav = document.getElementById('category-nav');
const menuGrid = document.getElementById('menu-grid');
const cartBadge = document.getElementById('cart-badge');
const cartOverlay = document.getElementById('cart-overlay');
const cartSidebar = document.getElementById('cart-sidebar');
const openCartBtn = document.getElementById('open-cart-btn');
const closeCartBtn = document.getElementById('close-cart-btn');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalPrice = document.getElementById('cart-total-price');
const checkoutBtn = document.getElementById('checkout-btn');
const toast = document.getElementById('toast');

// Format Currency
const formatIDR = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(number);
};

// Find Item
const findItem = (id) => {
    for (const cat of menuData) {
        const item = cat.items.find(i => i.id === id);
        if (item) return item;
    }
    return null;
};

// Render Categories
const renderCategories = () => {
    categoryNav.innerHTML = '';
    menuData.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `category-btn ${cat.category === activeCategory ? 'active' : ''}`;
        btn.textContent = cat.category;
        btn.onclick = () => {
            activeCategory = cat.category;
            renderCategories(); // update active state
            renderMenu();
        };
        categoryNav.appendChild(btn);
    });
};

// Render Menu Items
const renderMenu = () => {
    menuGrid.innerHTML = '';
    const categoryData = menuData.find(cat => cat.category === activeCategory);
    
    if (categoryData) {
        categoryData.items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'menu-item';
            div.innerHTML = `
                <div class="item-info">
                    <h3 class="item-name">${item.name}</h3>
                    ${item.description ? `<p class="item-desc">${item.description}</p>` : ''}
                    <div class="item-bottom">
                        <span class="item-price">${formatIDR(item.price)}</span>
                        <button class="add-btn" onclick="addToCart('${item.id}')">
                            <i class="ri-add-line"></i>
                        </button>
                    </div>
                </div>
            `;
            menuGrid.appendChild(div);
        });
    }
};

// Cart Logic
window.addToCart = (id) => {
    const item = findItem(id);
    if (!item) return;

    const existingItem = cart.find(cartItem => cartItem.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    updateCartUI();
    showToast();
};

window.updateQuantity = (id, change) => {
    const itemIndex = cart.findIndex(item => item.id === id);
    if (itemIndex > -1) {
        cart[itemIndex].quantity += change;
        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1);
        }
        updateCartUI();
    }
};

const updateCartUI = () => {
    // Update Badge
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalItems;
    
    if (totalItems === 0) {
        cartBadge.style.display = 'none';
    } else {
        cartBadge.style.display = 'flex';
    }

    // Update Cart Sidebar
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <i class="ri-shopping-bag-3-line"></i>
                <p>Keranjang masih kosong</p>
            </div>
        `;
        cartTotalPrice.textContent = 'Rp 0';
        checkoutBtn.disabled = true;
        return;
    }

    let totalAmount = 0;
    cartItemsContainer.innerHTML = '';
    
    cart.forEach(item => {
        totalAmount += item.price * item.quantity;
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div class="cart-item-info">
                <h4 class="cart-item-name">${item.name}</h4>
                <div class="cart-item-price">${formatIDR(item.price)}</div>
            </div>
            <div class="cart-item-controls">
                <button class="qty-btn" onclick="updateQuantity('${item.id}', -1)">-</button>
                <span class="qty-display">${item.quantity}</span>
                <button class="qty-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
            </div>
        `;
        cartItemsContainer.appendChild(div);
    });

    cartTotalPrice.textContent = formatIDR(totalAmount);
    checkoutBtn.disabled = false;
};

// Toast
const showToast = () => {
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
};

// Event Listeners
openCartBtn.addEventListener('click', () => {
    cartOverlay.classList.add('active');
    cartSidebar.classList.add('active');
});

const closeCart = () => {
    cartOverlay.classList.remove('active');
    cartSidebar.classList.remove('active');
};

closeCartBtn.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

checkoutBtn.addEventListener('click', () => {
    let orderText = 'Halo Kiin Coffee, saya mau pesan:%0A%0A';
    let total = 0;
    cart.forEach(item => {
        orderText += `- ${item.quantity}x ${item.name} (${formatIDR(item.price * item.quantity)})%0A`;
        total += item.price * item.quantity;
    });
    orderText += `%0ATotal: ${formatIDR(total)}%0A%0ATerima kasih!`;
    
    // Open WhatsApp
    window.open(`https://wa.me/6281234567890?text=${orderText}`, '_blank');
});

// Initialize
renderCategories();
renderMenu();
updateCartUI();
