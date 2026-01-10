document.getElementById('trialForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const responseDiv = document.getElementById('formResponse');
    
    try {
      const response = await fetch('/trial', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData))
      });
      const data = await response.json();
      
      responseDiv.textContent = data.success ? '✅ Thanks! We\'ll contact you soon to schedule.' : data.message;
      responseDiv.className = `response ${data.success ? 'success' : 'error'}`;
      responseDiv.classList.remove('hidden');
      e.target.reset();
    } catch (error) {
      responseDiv.textContent = 'Something went wrong. Please try again.';
      responseDiv.className = 'response error';
      responseDiv.classList.remove('hidden');
    }
  });
  