const ticket = JSON.parse(localStorage.getItem('ticketConfirmation'))
console.log(ticket);
document.getElementById('pnr-id').textContent = ticket.pnr || 'N/A' 
document.getElementById('date').textContent = ticket.date || 'N/A'
document.getElementById('time').textContent = ticket.time || 'N/A'
document.getElementById('train-from').textContent = ticket.trainfrom || 'N/A'
document.getElementById('train-to').textContent = ticket.trainto || 'N/A'
document.getElementById('ticket-status').textContent = ticket. ticketstatus || 'N/A'