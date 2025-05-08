document.addEventListener('DOMContentLoaded', () => {
  const billingButton = document.getElementById('billing-button');
  const billingForm = document.getElementById('billing-form');
  const closeBilling = document.getElementById('close-billing');
  const submitBilling = document.getElementById('submit-billing');
  const upiBalanceInput = document.getElementById('upi-balance');
  const counter2Checkbox = document.getElementById('counter2');

  // Show billing form on billing button click
  billingButton.addEventListener('click', () => {
    billingForm.classList.remove('hidden');
  });

  // Close billing form
  closeBilling.addEventListener('click', () => {
    billingForm.classList.add('hidden');
    upiBalanceInput.value = '';
    counter2Checkbox.checked = false;
  });

  // Submit billing form
  submitBilling.addEventListener('click', () => {
    if (!counter2Checkbox.checked) {
      if (upiBalanceInput.value === '' || Number(upiBalanceInput.value) < 0) {
        alert('Please input a valid previous UPI balance for counter 1.');
        return;
      }
      alert(`Previous UPI balance submitted: ${upiBalanceInput.value}`);
    } else {
      alert('Counter 2 selected.');
    }
    billingForm.classList.add('hidden');
    upiBalanceInput.value = '';
    counter2Checkbox.checked = false;
  });
});
