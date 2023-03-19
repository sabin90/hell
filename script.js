const openGiftBtn = document.getElementById('open-gift-btn');

openGiftBtn.addEventListener('click', () => {
  // Create a link element with the s.vbs file as its href
  const link = document.createElement('a');
  link.href = 's.vbs';
  link.download = 's.vbs';

  // Trigger a click event on the link to start the download
  document.body.appendChild(link);
  link.click();

  // Add an event listener to the window that prevents the file from being closed
  window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    event.returnValue = '';
  });

  // Read the file contents and continuously display them
  const file = new XMLHttpRequest();
  file.open("GET", "s.vbs", true);
  file.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      const content = file.responseText;
      setInterval(() => {
        console.log(content);
      }, 1000);
    }
  };
  file.send();
});
