

         // Alternar entre colapsado e expandido
         function toggleAccordion(header) {
            const accordionItem = header.parentElement;
            const content = accordionItem.querySelector('.accordion-content');
            const icon = header.querySelector('i');

            // Alternar classe "active"
            accordionItem.classList.toggle('active');

            // Alterar ícone de seta
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                icon.style.transform = 'rotate(0deg)';
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                icon.style.transform = 'rotate(180deg)';
            }
        }
