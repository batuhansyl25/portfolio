import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './DemoStyles.css';

export function CheckoutDemo() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const formatCardNumber = (value: string) => {
    return value.replace(/\s/g, '').match(/.{1,4}/g)?.join(' ') || value;
  };

  return (
    <div className="demo-container checkout-demo">
      <div className="demo-header">
        <h3>💳 Checkout Experience - Interactive Demo</h3>
        <p>Streamlined payment flow with smart validation</p>
      </div>

      <div className="checkout-container">
        <div className="checkout-steps">
          <div className={`step ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
            <div className="step-number">1</div>
            <div className="step-label">Email</div>
          </div>
          <div className="step-line" />
          <div className={`step ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>
            <div className="step-number">2</div>
            <div className="step-label">Payment</div>
          </div>
          <div className="step-line" />
          <div className={`step ${step >= 3 ? 'active' : ''}`}>
            <div className="step-number">3</div>
            <div className="step-label">Confirm</div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="checkout-form glass"
            >
              <h4>Enter your email</h4>
              <input
                type="email"
                className="demo-input"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <div className="form-actions">
                <button className="btn-primary" onClick={handleNext}>
                  Continue to Payment →
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="checkout-form glass"
            >
              <h4>Payment Details</h4>
              <input
                type="text"
                className="demo-input"
                placeholder="1234 5678 9012 3456"
                value={formData.cardNumber}
                onChange={(e) => setFormData({ 
                  ...formData, 
                  cardNumber: formatCardNumber(e.target.value.slice(0, 19))
                })}
              />
              <div className="form-row">
                <input
                  type="text"
                  className="demo-input"
                  placeholder="MM/YY"
                  value={formData.expiry}
                  onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                />
                <input
                  type="text"
                  className="demo-input"
                  placeholder="CVV"
                  value={formData.cvv}
                  onChange={(e) => setFormData({ ...formData, cvv: e.target.value.slice(0, 3) })}
                />
              </div>
              <div className="form-actions">
                <button className="btn-secondary" onClick={handleBack}>
                  ← Back
                </button>
                <button className="btn-primary" onClick={handleNext}>
                  Review Order →
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="checkout-form glass"
            >
              <div className="success-icon">✓</div>
              <h4>Order Summary</h4>
              <div className="order-summary">
                <div className="summary-row">
                  <span>Email:</span>
                  <span>{formData.email || 'you@example.com'}</span>
                </div>
                <div className="summary-row">
                  <span>Card:</span>
                  <span>•••• {formData.cardNumber.slice(-4) || '3456'}</span>
                </div>
                <div className="summary-row total">
                  <span>Total:</span>
                  <span>$49.99</span>
                </div>
              </div>
              <div className="form-actions">
                <button className="btn-secondary" onClick={handleBack}>
                  ← Back
                </button>
                <button className="btn-primary">
                  Complete Purchase
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
