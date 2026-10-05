// Mobile Navigation Toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Testimonial Stories Carousel Data
        const stories = [
            { text: '"I feel safe, loved and happy here. I want to be a doctor when I grow up!"', author: '— Chisom, 7 years old', avatar: 'https://images.unsplash.com/photo-1595454223600-91fbddbbf2db?auto=format&fit=crop&q=80&w=400' },
            { text: '"The care and support here gave my baby a second chance at a healthy life. We are forever grateful."', author: '— Caregiver Review', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400' },
            { text: '"I love the quiet place to study. My dream is to become a teacher and help other children learn."', author: '— Maya, 10 years old', avatar: 'assets/images/story-maya.svg' },
            { text: '"Having a safe home helped me believe in myself again. I want to build things when I grow up."', author: '— Karim, 12 years old', avatar: 'assets/images/story-karim.svg' },
            { text: '"The first time I joined the art class, I discovered something I was good at. Now I draw every week."', author: '— Nour, 9 years old', avatar: 'assets/images/story-nour.svg' },
            { text: '"I enjoy school because I know someone is cheering for me. I want to be an engineer someday."', author: '— Elias, 11 years old', avatar: 'assets/images/story-elias.svg' },
            { text: '"I have friends here who feel like family. I hope every child can have a place where they belong."', author: '— Lina, 8 years old', avatar: 'assets/images/story-lina.svg' },
            { text: '"The support I received helped me become confident and independent. I am excited about my future."', author: '— Samir, 14 years old', avatar: 'assets/images/story-samir.svg' },
            { text: '"Every day brings a new reason to smile. I want to help other children feel the same hope."', author: '— Yara, 13 years old', avatar: 'assets/images/story-yara.svg' }
        ];

        let currentStory = 0;
        const storyText = document.getElementById('story-text');
        const storyAuthor = document.getElementById('story-author');
        const storyAvatar = document.getElementById('story-avatar');

        function updateStory() {
            storyText.textContent = stories[currentStory].text;
            storyAuthor.textContent = stories[currentStory].author;
            storyAvatar.src = stories[currentStory].avatar;
        }

        document.getElementById('next-story').addEventListener('click', () => {
            currentStory = (currentStory + 1) % stories.length;
            updateStory();
        });

        document.getElementById('prev-story').addEventListener('click', () => {
            currentStory = (currentStory - 1 + stories.length) % stories.length;
            updateStory();
        });

        // Donation Modal Handlers
        const donateModal = document.getElementById('donate-modal');
        let activeCurrency = 'USD';

        function openDonateModal() {
            donateModal.classList.remove('hidden');
        }

        function closeDonateModal() {
            donateModal.classList.add('hidden');
        }

        function setCurrency(curr) {
            activeCurrency = 'USD';
            document.getElementById('currency-symbol').textContent = '$';
        }

        function selectAmount(amt) {
            document.getElementById('custom-amount').value = amt;
        }

        function handleDonation(e) {
            e.preventDefault();
            const amount = document.getElementById('custom-amount').value;
            const sym = activeCurrency === 'NGN' ? '₦' : '$';
            alert(`Thank you for your generosity! Your donation pledge of ${sym}${amount} to LumiNest Foundation has been registered.`);
            closeDonateModal();
        }

        // Newsletter Handler
        document.getElementById('newsletter-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for subscribing to LumiNest Foundation updates!');
            this.reset();
        });
