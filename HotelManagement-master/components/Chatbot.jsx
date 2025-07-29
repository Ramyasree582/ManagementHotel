import React, { useState, useRef, useEffect } from 'react';

const menuItems = [
  { id: 1, name: 'Margherita Pizza', category: 'Pizza', price: 12.99, description: 'Classic pizza with tomato sauce, mozzarella, and basil' },
  { id: 2, name: 'Pepperoni Pizza', category: 'Pizza', price: 14.99, description: 'Pizza with tomato sauce, mozzarella, and pepperoni' },
  { id: 3, name: 'Caesar Salad', category: 'Salad', price: 8.99, description: 'Romaine lettuce, croutons, parmesan, and Caesar dressing' },
  { id: 4, name: 'Spaghetti Carbonara', category: 'Pasta', price: 13.99, description: 'Pasta with eggs, cheese, pancetta, and black pepper' },
  { id: 5, name: 'Tiramisu', category: 'Dessert', price: 6.99, description: 'Coffee-flavored Italian dessert' },
  { id: 6, name: 'Garlic Bread', category: 'Starter', price: 4.99, description: 'Toasted bread topped with garlic and butter' },
];

const defaultResponses = [
  { 
    q: /hello|hi|hey/i, 
    a: 'Namaste! Welcome to Inti Ruchulu Restaurant. How can I help you today?' 
  },
  { 
    q: /menu|food|dish|eat|hungry/i, 
    a: 'We serve authentic Andhra cuisine! Our menu categories include: Breakfast, Rice Meals, Curries, Biryanis, Tiffins, and Sweets. You can ask about specific items like "What biryanis do you have?" or "Tell me about your special meals".' 
  },
  { 
    q: /order|track/i, 
    a: 'You can place an order by telling me what you\'d like. We deliver fresh meals daily! For existing orders, please provide your order number.' 
  },
  { 
    q: /hours|open|close|time/i, 
    a: 'Our opening hours:\nMonday - Sunday: 8:00 AM - 10:00 PM\nWe serve fresh meals throughout the day!' 
  },
  { 
    q: /location|address|where/i, 
    a: 'We are located at:\nKalajyothi, Dharmavaram\nAndhra Pradesh 515671\nYou can find us on Google Maps!' 
  },
  { 
    q: /contact|phone|number|email/i, 
    a: 'You can reach us at:\nPhone: +91 7989630780\nEmail: info@intiruchulu.com\nFeel free to call for any inquiries!' 
  },
  { 
    q: /reservation|book|table/i, 
    a: 'For reservations, please call us at +91 7989630780. We recommend booking in advance during peak hours!' 
  },
  { 
    q: /specials|promo|discount|offer/i, 
    a: 'Today\'s specials:\n- Traditional Andhra Thali with 5 curries\n- Daily lunch combo: Rice + 2 curries + dessert\n- Family meal packages available' 
  },
  { 
    q: /vegetarian|vegan|veg/i, 
    a: 'We specialize in delicious vegetarian Andhra cuisine! Our menu includes many traditional vegetarian dishes like Pulihora, Pongal, and various curries.' 
  },
  { 
    q: /spicy|hot|mirchi/i, 
    a: 'Our food features authentic Andhra spices! We can adjust spice levels to your preference - just let us know when ordering.' 
  },
  { 
    q: /deliver(y|ies)|takeaway/i, 
    a: 'Yes! We deliver fresh meals daily in Dharmavaram area. Minimum order for delivery is ₹200. Delivery time is approximately 30-45 minutes.' 
  },
  { 
    q: /pay(ment)?|card|cash|upi/i, 
    a: 'We accept all payment methods:\n- Cash\n- Credit/Debit Cards\n- UPI (PhonePe, Google Pay, PayTM)\n- Online payment links' 
  },
  { 
    q: /bye|thank|thanks|dhanyavad/i, 
    a: 'Dhanyavadalu! Thank you for choosing Inti Ruchulu. We hope to serve you again soon. Have a great day!' 
  },
];

function getBotResponse(msg, context) {
  // Check for menu item queries
  const menuItemQuery = msg.match(/tell me about|what is|describe|info on|details of (.+)/i);
  if (menuItemQuery) {
    const itemName = menuItemQuery[1].toLowerCase();
    const item = menuItems.find(i => i.name.toLowerCase().includes(itemName));
    if (item) {
      return `${item.name}: ${item.description}. Price: $${item.price.toFixed(2)}`;
    }
  }

  // Check for category queries
  const categoryQuery = msg.match(/(what|which|show).*(pizza|salad|pasta|dessert|starter)s?/i);
  if (categoryQuery) {
    const category = categoryQuery[2];
    const itemsInCategory = menuItems.filter(i => i.category.toLowerCase() === category.toLowerCase());
    if (itemsInCategory.length > 0) {
      const itemList = itemsInCategory.map(i => `${i.name} - $${i.price.toFixed(2)}`).join('\n');
      return `Our ${category} options:\n${itemList}`;
    }
  }

  // Check for price queries
  const priceQuery = msg.match(/how much is|price of|cost of (.+)/i);
  if (priceQuery) {
    const itemName = priceQuery[1].toLowerCase();
    const item = menuItems.find(i => i.name.toLowerCase().includes(itemName));
    if (item) {
      return `The ${item.name} costs $${item.price.toFixed(2)}`;
    }
  }

  // Check for default responses
  for (const pair of defaultResponses) {
    if (pair.q.test(msg)) return pair.a;
  }

  return "I'm here to help with our menu, orders, and restaurant information. You can ask about specific dishes, prices, or our hours of operation.";
}

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hello! Welcome to our restaurant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [context, setContext] = useState({});
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  const sendMessage = () => {
    if (!input.trim()) return;
    
    const userMsg = { from: 'user', text: input };
    setMessages(msgs => [...msgs, userMsg]);
    
    setTimeout(() => {
      const botResponse = getBotResponse(input, context);
      const botMsg = { from: 'bot', text: botResponse };
      setMessages(msgs => [...msgs, botMsg]);
      
      // Update context if needed (for multi-turn conversations)
      if (input.toLowerCase().includes('order')) {
        setContext({ ...context, isOrdering: true });
      }
    }, 600);
    
    setInput('');
  };

  const renderMessage = (msg, i) => {
    // Format bot messages with line breaks
    const formattedText = msg.text.split('\n').map((line, idx) => (
      <React.Fragment key={idx}>
        {line}
        <br />
      </React.Fragment>
    ));

    return (
      <div key={i} style={{
        textAlign: msg.from === 'user' ? 'right' : 'left',
        marginBottom: '0.5rem',
      }}>
        <span style={{
          display: 'inline-block',
          background: msg.from === 'user' ? '#ff9800' : '#eee',
          color: msg.from === 'user' ? '#white' : '#333',
          borderRadius: '16px',
          padding: '0.5rem 1rem',
          maxWidth: '80%',
          fontSize: '1rem',
          whiteSpace: 'pre-line',
        }}>
          {formattedText}
        </span>
      </div>
    );
  };

  return (
    <>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 1000,
          background: '#ff9800',
          color: '#fff',
          border: 'none',
          borderRadius: '50%',
          width: '56px',
          height: '56px',
          fontSize: '2rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          cursor: 'pointer',
          transition: 'transform 0.2s',
        }}
        aria-label="Open chatbot"
        className="chatbot-button"
      >
        {open ? '✕' : '💬'}
      </button>
      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: '5.5rem',
            right: '2rem',
            width: '350px',
            maxHeight: '500px',
            background: '#fff',
            borderRadius: '12px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
            zIndex: 1001,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
          className="chatbot-container"
        >
          <div style={{ 
            background: '#ff9800', 
            color: '#fff', 
            padding: '1rem', 
            fontWeight: 'bold',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span>Restaurant Assistant</span>
            <button 
              onClick={() => setOpen(false)} 
              style={{ 
                background: 'none', 
                border: 'none', 
                color: '#fff', 
                fontSize: '1.2rem', 
                cursor: 'pointer',
                padding: '0',
                lineHeight: '1'
              }}
            >
              ×
            </button>
          </div>
          <div style={{ 
            flex: 1, 
            padding: '1rem', 
            overflowY: 'auto', 
            background: '#f9f9f9',
            minHeight: '300px'
          }}>
            {messages.map((msg, i) => renderMessage(msg, i))}
            <div ref={messagesEndRef} />
          </div>
          <div style={{ 
            display: 'flex', 
            borderTop: '1px solid #eee', 
            background: '#fff',
            alignItems: 'center'
          }}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
              placeholder="Ask about our menu, hours, or place an order..."
              style={{ 
                flex: 1, 
                border: 'none', 
                padding: '0.75rem', 
                fontSize: '1rem', 
                outline: 'none',
                borderRadius: '0'
              }}
              autoFocus={open}
            />
            <button
              onClick={sendMessage}
              style={{ 
                background: '#ff9800', 
                color: '#fff', 
                border: 'none', 
                padding: '0 1.2rem', 
                fontSize: '1.2rem', 
                cursor: 'pointer',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              disabled={!input.trim()}
            >
              ➤
            </button>
          </div>
          <div style={{
            padding: '0.5rem',
            background: '#f5f5f5',
            fontSize: '0.8rem',
            color: '#666',
            textAlign: 'center',
            borderTop: '1px solid #eee'
          }}>
            Try: "What pizzas do you have?" or "Tell me about the Tiramisu"
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;