const INITIAL_POSTS = [
    {
        id: '1',
        author: 'Maya Sterling',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnL4xvUvieqOB7uExy_wzD4ez4jr9Uxip43qkO7GMLkJMdVzd31bMviMagSE7QCUj4Y_QxPSQBWf3sfXm1sw7atDbGnF3PJudvyJDiMBezTk3nDvyTlYg6wSH0lr5IRhHdDT2eygDsM-pY9RtXBMEPBXWLteNsBh1llbNofQTd5w6YLkrjStxutwIRQRYE84T2Ii_IQP9H1PUkIWaKTEVdDZZwPAo74TVEEFbTvXge56pyiKUFxjUHU95mYQiLrpDSbHJWZ3z7Vg',
        time: 'há 2 horas',
        content: "Há um tipo específico de paz que vem com as manhãs de domingo bem cedo. Apenas o som do vento e a sensação de quietude absoluta. Grata por este fôlego. ✨",
        likes: 24,
        comments: 4
    },
    {
        id: '2',
        author: 'Julian Chen',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4Hn9DzGZ3V8LAe3Y2xRhfc-1hdlbTuFfAULpPDgQLdn65C37EcLXuirDG5mrafGwAKsGcZvf3iTUuO0xEN4s__4NjoytfPDLPSgNCIt-x1weDcEhwP5Ty7YAfkG-xpTLzbZsWvVcGI4jPYM-vlZXaIGZaYdrDpDfbjLu3Tg5cV4_Fw1msXdZP1M-hZ5vNw7fxhSA1oPdZXzo0xXjWb6aN3uI6J6Zedka375tGmJOBd0JJdxHjvAYgvYidYVwgHKTl4jsMiNnWBQ',
        time: 'há 5 horas',
        content: 'Finalmente terminei aquele projeto! Humor atual: Alegria absoluta.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALbLaZOo0yNzpmw2lo8HVDN2fFFVsQsHt2ktOBVvJWf0un8ApoxlZxlMRPko89v-ThjGaws7wdJLDIBU3DRB4OTupkxjClZdk4nk4JW0LcnL4FUN7FKO1nhNKesCKKsCXdP6AbZ2vj0Yo8zFw7kZ-2vsFiR6B46prSxkxAGRjdOH85cPdjHF3LZFB7KPudyk2OFZD2lFuYGnn0ufnGy5Z8jVx5pg6RfnpYvNRhP_0ZfnAogib2NpChMpPltIPvZRm9Ijs1WiCDQw',
        likes: 158,
        comments: 12
    },
    {
        id: '3',
        author: 'Elena Luz',
        avatar: 'EL',
        time: 'Ontem',
        content: '"A suavidade não é fraqueza. É preciso coragem para permanecer delicado em um mundo que muitas vezes é duro."',
        likes: 89,
        comments: 2,
        isQuote: true
    }
];

let posts = [...INITIAL_POSTS];

const feedElement = document.getElementById('feed');
const inputElement = document.getElementById('feeling-input');
const sendBtn = document.getElementById('send-btn');

function renderPosts() {
    feedElement.innerHTML = '';
    posts.forEach(post => {
        const article = document.createElement('article');
        article.className = 'bg-white rounded-2xl p-6 shadow-[0px_20px_40px_rgba(57,43,83,0.08)] post-card';
        
        const avatarContent = post.avatar.length === 2 
            ? `<div class="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center text-[#8523dd] font-bold">${post.avatar}</div>`
            : `<img src="${post.avatar}" alt="${post.author}" class="w-12 h-12 rounded-full object-cover">`;

        article.innerHTML = `
            <div class="flex items-center gap-3 mb-4">
                ${avatarContent}
                <div>
                    <h3 class="font-bold text-slate-900">${post.author}</h3>
                    <p class="text-xs text-slate-500">${post.time}</p>
                </div>
            </div>
            ${post.isQuote 
                ? `<p class="text-slate-900 text-2xl font-light italic leading-snug">${post.content}</p>`
                : `<p class="text-slate-900 leading-relaxed ${post.image ? 'mb-4' : 'text-lg'}">${post.content}</p>`
            }
            ${post.image ? `
                <div class="rounded-2xl overflow-hidden mb-4">
                    <img src="${post.image}" alt="Post content" class="w-full aspect-video object-cover">
                </div>
            ` : ''}
            <div class="mt-6 flex gap-6 text-slate-500">
                <button class="flex items-center gap-1.5 hover:text-[#8523dd] transition-colors">
                    <span class="material-symbols-outlined text-xl">favorite</span>
                    <span class="text-sm font-medium">${post.likes}</span>
                </button>
                <button class="flex items-center gap-1.5 hover:text-[#8523dd] transition-colors">
                    <span class="material-symbols-outlined text-xl">chat_bubble</span>
                    <span class="text-sm font-medium">${post.comments}</span>
                </button>
            </div>
        `;
        feedElement.appendChild(article);
    });
}

sendBtn.addEventListener('click', () => {
    const content = inputElement.value.trim();
    if (!content) return;

    const newPost = {
        id: Date.now().toString(),
        author: 'Você',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
        time: 'Agora mesmo',
        content: content,
        likes: 0,
        comments: 0
    };

    posts = [newPost, ...posts];
    inputElement.value = '';
    renderPosts();
});

// Initial render
renderPosts();

// Navigation buttons interaction
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});
