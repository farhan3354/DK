import React, { useState } from 'react';
import './Price.css'; // Import your CSS file for custom styles
import M1 from '../../Form/M1';
import M2 from '../../Form/M2'; 
import M3 from '../../Form/M3';
import M4 from '../../Form/M4';
import M5 from '../../Form/M5';
import M6 from '../../Form/M6';
import M7 from '../../Form/M7';
import M8 from '../../Form/M8';

// PlanCard component to render each plan
const PlanCard = ({ plan, onSelect }) => {
  return (
    <div className={`plan ${plan.featured ? 'featured' : ''}`}>
      <header>
        <h4 className="plan-title">{plan.title}</h4>
        <div className="plan-cost">
          <span className="plan-price">{plan.price}</span>
          <span className="plan-type">/month</span>
        </div>
      </header>
      <ul className="plan-features">
        {plan.features.map((feature, index) => (
          <li key={index}>
            <i className="ion-checkmark"></i> {feature}
          </li>
        ))}
      </ul>
      <div className="plan-select">
        <button type="button" onClick={onSelect} className="select-plan-button">
          Select Plan
        </button>
      </div>
    </div>
  );
};

// PlanList component to render the list of plans
const PlanList = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const openModal = (plan) => setSelectedPlan(plan);
  const closeModal = () => setSelectedPlan(null);

  const plans = [
    {
      title: "Student Plan",
      price: "$19",
      features: [
        "Low Initial Investment",
        "Flexible Contribution Options",
        "Customized Investment Portfolio",
        "Educational Resources and Workshops",
        "No Early Withdrawal Penalties"
      ],
      component: M1
    },
    {
      title: "Dk Share",
      price: "$29",
      features: [
        "Flexible Investment Options",
        "High ROI Potential",
        "Profit Distribution: Quarterly Payouts",
        "Risk Mitigation Strategies",
        "Transparent Terms and Conditions"
      ],
      component: M2
    },
    {
      title: "Gold Plan",
      price: "$49",
      features: [
        "Moderate Investment Level",
        "Priority Customer Support",
        "Enhanced Profit Margins",
        "Exclusive Access to Premium Tools",
        "Annual Bonus Rewards"
      ],
      component: M3
    },
    {
      title: "Sharing Plan",
      price: "$99",
      features: [
        "Flexible Investment Options",
        "High ROI Potential",
        "Profit Distribution: Quarterly Payouts",
        "Risk Mitigation Strategies",
        "Transparent Terms and Conditions"
      ],
      component: M4
    },
    {
      title: "Real Estate",
      price: "$199",
      features: [
        "Prime Property Access",
        "Guaranteed Rental Income",
        "Dedicated Property Management",
        "Capital Appreciation Benefits",
        "Priority in Project Allocation"
      ],
      component: M5
    },
    {
      title: "Car Finance",
      price: "$299",
      features: [
        "Competitive Interest Rates",
        "Flexible Repayment Options",
        "Comprehensive Insurance Coverage",
        "Priority Loan Approval",
        "Zero Processing Fees"
      ],
      component: M6
    },
    {
      title: "1 Million Plan",
      price: "$79",
      features: [
        "High-Value Investment Opportunities",
        "Exclusive Portfolio Management",
        "Tailored Risk Management Strategies",
        "Priority Access to Premium Assets",
        "Comprehensive Financial Planning"
      ],
      component: M7
    },
    {
      title: "Stock Market Plan",
      price: "$129",
      features: [
        "Expert Stock Analysis and Recommendations",
        "Access to High-Growth Stocks",
        "Customized Investment Strategies",
        "Real-Time Market Insights",
        "Priority Trade Execution"
      ],
      component: M8
    }
  ]; // Add all your plans here

  return (
    <div className="snip1404">
      {plans.map((plan, index) => (
        <PlanCard key={index} plan={plan} onSelect={() => openModal(plan)} />
      ))}

      {/* Render the modal based on selectedPlan */}
      {selectedPlan && React.createElement(selectedPlan.component, { isOpen: true, onClose: closeModal })}
    </div>
  );
};

export default PlanList;
 