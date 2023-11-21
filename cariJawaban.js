
//Cari jawaban Cari jawaban Cari jawab
// document.getElementById('query').addEventListener('change', function(event) {
//     const queries = event.textContent.split(' ');
//     for(let query in queries){
//         if (query == jawaban) {
            
//         }
//     }
// });

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const longText = document.getElementById('longText');
    const backtotop = document.getElementById('backtotop');
  
    searchButton.addEventListener('click', () => {
      const query = searchInput.value.trim().toLowerCase();
      const searchArray = query.split(' ');
  
      const text = longText.innerText.toLowerCase();
      const words = text.split(' ');
  
      const highlightedWords = words.map((word) => {
        const isMatch = searchArray.some((searchWord) => word.includes(searchWord));
        return isMatch ? `<a id="highlightAnchor" href="#top" class="highlight">${word}</a>` : word;
      });
  
      longText.innerHTML = highlightedWords.join(' ');
  
      const isTextFound = highlightedWords.some((word) => word.includes('<a id="highlightAnchor" '));
  
      if (isTextFound) {
        longText.style.display = 'block';
  
        const highlightAnchor = document.getElementById('highlightAnchor');
        if (highlightAnchor) {

        setTimeout(() => {
            backtotop.style.visibility = 'visible';
        }, 3000);
        setTimeout(() => {
            backtotop.style.visibility = 'hidden';
        }, 10000);
        
          highlightAnchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
          info.textContent = 'Ditemukan';
        }
      } else {
        longText.style.display = 'none';
        info.textContent = 'Tidak ditemukan';
      }
    });
  });








// document.addEventListener('DOMContentLoaded', () => {
//     const searchInput = document.getElementById('searchInput');
//     const searchButton = document.getElementById('searchButton');
//     const longText = document.getElementById('longText');
  
//     searchButton.addEventListener('click', () => {
//       const query = searchInput.value.trim().toLowerCase();
//       const searchArray = query.split(' ');
  
//       const text = longText.innerText.toLowerCase();
//       const words = text.split(' ');
  
//       const highlightedText = words
//         .map((word) => {
//           const isMatch = searchArray.some((searchWord) => word.includes(searchWord));
//           return isMatch ? `<span class="highlight">${word}</span>` : alert(`KALO  ${query} MANA ADA ITU`);
//         })
//         .join(' ');
  
//       longText.innerHTML = highlightedText;
//     });
//   });