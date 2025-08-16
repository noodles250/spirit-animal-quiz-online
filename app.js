// 🦌 Spirit Animal Quiz - App Logic
// ==========================================

// State Management
const AppState = {
    currentPage: 'landing',
    currentQuestion: 0,
    answers: [],
    totalQuestions: 12,
    quizStarted: false,
    result: null,
    selectedGender: null
};




// Spirit Animals Database 🦌✨
const SpiritAnimals = {
    // LEADERSHIP TYPES 👑
    eagle: {
        id: 'eagle',
        name: 'Eagle',
        emoji: '🦅',
        type: 'leadership',
        category: 'Leadership',
        tagline: 'The Visionary Leader',
        
        description: {
            short: 'You soar high above challenges with exceptional vision and natural leadership abilities.',
            detailed: 'As an Eagle spirit, you possess an extraordinary ability to see the bigger picture and lead others toward ambitious goals. Your keen vision allows you to spot opportunities that others miss, and your fearless nature drives you to pursue them with determination. You inspire confidence in others and have a natural talent for strategic thinking.'
        },
        
        traits: {
            core: ['Visionary', 'Strategic', 'Fearless', 'Inspiring', 'Independent'],
            strengths: ['Natural leadership', 'Big-picture thinking', 'Decisive action', 'Inspiring presence'],
            challenges: ['Can seem aloof', 'May overlook details', 'Impatient with slow progress']
        },
        
        career: {
            ideal: ['CEO/Executive', 'Entrepreneur', 'Military Leader', 'Pilot', 'Architect'],
            environment: 'Thrives in high-level positions with autonomy and strategic responsibility'
        },
        
        relationships: {
            compatible: ['wolf', 'lion', 'tiger'],
            complementary: ['owl', 'elephant', 'bear'],
            challenging: ['butterfly', 'deer'],
            advice: 'Remember to appreciate the details and support your team members emotionally'
        },
        
        spirituality: {
            element: 'Air',
            direction: 'East',
            season: 'Spring',
            message: 'Rise above limitations and trust your higher perspective'
        },
        
        growth: {
            focus: 'Develop patience and emotional intelligence to complement your natural leadership',
            meditation: 'Visualize soaring high while staying connected to those below',
            affirmation: 'I lead with vision and inspire others to reach their highest potential'
        }
    },

    lion: {
        id: 'lion',
        name: 'Lion',
        emoji: '🦁',
        type: 'leadership',
        category: 'Leadership',
        tagline: 'The Confident Ruler',
        
        description: {
            short: 'You command respect naturally and lead with unwavering confidence and courage.',
            detailed: 'The Lion spirit embodies royal leadership and magnetic charisma. You have an innate ability to command attention and respect without demanding it. Your confidence is infectious, and people naturally look to you for guidance in challenging times. You protect those you care about fiercely and never back down from defending your principles.'
        },
        
        traits: {
            core: ['Confident', 'Charismatic', 'Protective', 'Proud', 'Loyal'],
            strengths: ['Natural authority', 'Magnetic presence', 'Fierce protection', 'Unwavering courage'],
            challenges: ['Can be prideful', 'May dominate conversations', 'Struggles with criticism']
        },
        
        career: {
            ideal: ['Team Leader', 'Public Speaker', 'Politics', 'Entertainment', 'Sports Captain'],
            environment: 'Excels in roles where charisma and leadership presence are valued'
        },
        
        relationships: {
            compatible: ['eagle', 'tiger', 'wolf'],
            complementary: ['elephant', 'bear', 'dolphin'],
            challenging: ['fox', 'butterfly'],
            advice: 'Practice humility and remember that true leadership serves others'
        },
        
        spirituality: {
            element: 'Fire',
            direction: 'South',
            season: 'Summer',
            message: 'Lead with your heart and let your inner light shine bright'
        },
        
        growth: {
            focus: 'Cultivate humility and learn to share the spotlight with others',
            meditation: 'Connect with your generous heart and protective instincts',
            affirmation: 'I lead with courage and protect those who need my strength'
        }
    },

    tiger: {
        id: 'tiger',
        name: 'Tiger',
        emoji: '🐅',
        type: 'leadership',
        category: 'Leadership',
        tagline: 'The Fierce Independent',
        
        description: {
            short: 'You are a powerful force of independence with the courage to forge your own path.',
            detailed: 'The Tiger spirit represents raw power combined with elegant independence. You prefer to work alone and trust your instincts above all else. Your fierce determination and willingness to take calculated risks set you apart. You have the courage to challenge the status quo and create new paths where none existed before.'
        },
        
        traits: {
            core: ['Independent', 'Fierce', 'Intuitive', 'Powerful', 'Solitary'],
            strengths: ['Self-reliance', 'Intuitive decision-making', 'Fearless action', 'Natural power'],
            challenges: ['Difficulty collaborating', 'Can be overly aggressive', 'Resists authority']
        },
        
        career: {
            ideal: ['Freelancer', 'Investigator', 'Emergency Responder', 'Artist', 'Consultant'],
            environment: 'Thrives in independent roles with minimal supervision and maximum autonomy'
        },
        
        relationships: {
            compatible: ['eagle', 'lion', 'wolf'],
            complementary: ['owl', 'fox', 'bear'],
            challenging: ['elephant', 'deer'],
            advice: 'Learn to appreciate teamwork while maintaining your independent spirit'
        },
        
        spirituality: {
            element: 'Fire',
            direction: 'West',
            season: 'Autumn',
            message: 'Trust your instincts and embrace your unique path'
        },
        
        growth: {
            focus: 'Develop patience and learn to work harmoniously with others when needed',
            meditation: 'Balance your fierce independence with compassionate connection',
            affirmation: 'I trust my instincts and have the courage to walk my own path'
        }
    },

    // WISDOM TYPES 🧙‍♀️
    owl: {
        id: 'owl',
        name: 'Owl',
        emoji: '🦉',
        type: 'wisdom',
        category: 'Wisdom',
        tagline: 'The Intuitive Sage',
        
        description: {
            short: 'You see beyond the surface with deep wisdom and intuitive understanding.',
            detailed: 'The Owl spirit embodies profound wisdom and mystical insight. You have an exceptional ability to see through illusions and understand hidden truths. Your intuitive nature allows you to perceive what others miss, and your thoughtful approach to life ensures you rarely make hasty decisions. You are drawn to mystery and find meaning in the depths of existence.'
        },
        
        traits: {
            core: ['Wise', 'Intuitive', 'Mysterious', 'Observant', 'Thoughtful'],
            strengths: ['Deep insight', 'Intuitive wisdom', 'Pattern recognition', 'Calm presence'],
            challenges: ['Can seem aloof', 'Overthinks decisions', 'Difficulty with small talk']
        },
        
        career: {
            ideal: ['Counselor', 'Researcher', 'Writer', 'Teacher', 'Psychologist'],
            environment: 'Excels in roles requiring deep thinking, analysis, and wisdom-sharing'
        },
        
        relationships: {
            compatible: ['elephant', 'wolf', 'whale'],
            complementary: ['eagle', 'tiger', 'fox'],
            challenging: ['lion', 'dolphin'],
            advice: 'Share your wisdom more openly and engage in lighter social interactions'
        },
        
        spirituality: {
            element: 'Air',
            direction: 'North',
            season: 'Winter',
            message: 'Trust your inner knowing and illuminate the path for others'
        },
        
        growth: {
            focus: 'Balance deep thinking with action and connect more openly with others',
            meditation: 'Embrace both your analytical mind and intuitive heart',
            affirmation: 'I trust my inner wisdom and share my insights to help others'
        }
    },

    elephant: {
        id: 'elephant',
        name: 'Elephant',
        emoji: '🐘',
        type: 'wisdom',
        category: 'Wisdom',
        tagline: 'The Gentle Giant',
        
        description: {
            short: 'You embody wisdom, loyalty, and nurturing strength that supports your community.',
            detailed: 'The Elephant spirit represents gentle wisdom and unwavering loyalty. Your memory is exceptional, and you never forget those who have helped or hurt you. You are the cornerstone of your community, always ready to support others with your strength and wisdom. Your patient nature and deep emotional intelligence make you a natural counselor and peacemaker.'
        },
        
        traits: {
            core: ['Wise', 'Loyal', 'Nurturing', 'Patient', 'Strong'],
            strengths: ['Exceptional memory', 'Emotional intelligence', 'Steady support', 'Natural wisdom'],
            challenges: ['Holds grudges too long', 'Can be overly cautious', 'Difficulty saying no']
        },
        
        career: {
            ideal: ['Counselor', 'Social Worker', 'Teacher', 'Healthcare', 'Community Leader'],
            environment: 'Thrives in supportive roles where wisdom and caring make a difference'
        },
        
        relationships: {
            compatible: ['bear', 'owl', 'whale'],
            complementary: ['lion', 'eagle', 'wolf'],
            challenging: ['tiger', 'fox'],
            advice: 'Learn to forgive more easily and take time for self-care'
        },
        
        spirituality: {
            element: 'Earth',
            direction: 'Center',
            season: 'All seasons',
            message: 'Your gentle strength and wisdom are gifts to your community'
        },
        
        growth: {
            focus: 'Practice forgiveness and set healthy boundaries while maintaining your caring nature',
            meditation: 'Connect with your ancient wisdom and generous heart',
            affirmation: 'I offer my strength and wisdom to create a better world'
        }
    },

    whale: {
        id: 'whale',
        name: 'Whale',
        emoji: '🐋',
        type: 'wisdom',
        category: 'Wisdom',
        tagline: 'The Ancient Soul',
        
        description: {
            short: 'You carry ancient wisdom and deep emotional understanding that spans lifetimes.',
            detailed: 'The Whale spirit embodies ancient wisdom and profound emotional depth. You have an old soul that seems to carry knowledge from beyond this lifetime. Your emotional intelligence is extraordinary, and you can sense the undercurrents of any situation. You are drawn to the mysteries of existence and often serve as a spiritual guide for others.'
        },
        
        traits: {
            core: ['Ancient', 'Deep', 'Emotional', 'Spiritual', 'Mysterious'],
            strengths: ['Profound wisdom', 'Emotional depth', 'Spiritual insight', 'Natural healing'],
            challenges: ['Can be overwhelmed by emotions', 'Feels isolated', 'Difficulty with superficial interactions']
        },
        
        career: {
            ideal: ['Spiritual Teacher', 'Healer', 'Therapist', 'Artist', 'Philosopher'],
            environment: 'Excels in roles involving healing, spiritual guidance, and deep connection'
        },
        
        relationships: {
            compatible: ['owl', 'elephant', 'turtle'],
            complementary: ['dolphin', 'bear', 'wolf'],
            challenging: ['eagle', 'tiger'],
            advice: 'Ground your deep insights in practical action and seek like-minded companions'
        },
        
        spirituality: {
            element: 'Water',
            direction: 'Deep',
            season: 'Eternal',
            message: 'Your ancient wisdom bridges the physical and spiritual worlds'
        },
        
        growth: {
            focus: 'Balance your spiritual depth with grounded action in the physical world',
            meditation: 'Dive deep into your inner ocean of wisdom',
            affirmation: 'I carry ancient wisdom that heals and guides others'
        }
    },

    // FREEDOM TYPES 🕊️
    horse: {
        id: 'horse',
        name: 'Horse',
        emoji: '🐎',
        type: 'freedom',
        category: 'Freedom',
        tagline: 'The Free Spirit',
        
        description: {
            short: 'You embody wild freedom and have an unstoppable drive to explore new horizons.',
            detailed: 'The Horse spirit represents pure freedom and boundless energy. You have an innate need to explore, travel, and experience all that life has to offer. Your adventurous spirit is infectious, and you inspire others to break free from their limitations. You value independence above security and are always ready for the next adventure.'
        },
        
        traits: {
            core: ['Free', 'Adventurous', 'Energetic', 'Independent', 'Spirited'],
            strengths: ['Boundless energy', 'Natural freedom', 'Inspiring spirit', 'Adaptability'],
            challenges: ['Difficulty with commitment', 'Restless nature', 'Avoids routine']
        },
        
        career: {
            ideal: ['Travel Guide', 'Photographer', 'Sales', 'Adventure Sports', 'Performer'],
            environment: 'Thrives in dynamic, changing environments with travel and variety'
        },
        
        relationships: {
            compatible: ['butterfly', 'dolphin', 'eagle'],
            complementary: ['wolf', 'bear', 'fox'],
            challenging: ['elephant', 'turtle'],
            advice: 'Learn to appreciate stability while maintaining your adventurous spirit'
        },
        
        spirituality: {
            element: 'Wind',
            direction: 'All directions',
            season: 'Spring',
            message: 'Freedom is your birthright - use it to inspire others'
        },
        
        growth: {
            focus: 'Balance your need for freedom with meaningful commitments and relationships',
            meditation: 'Feel the wind of freedom while staying grounded in love',
            affirmation: 'I am free to explore while staying connected to what matters'
        }
    },

    butterfly: {
        id: 'butterfly',
        name: 'Butterfly',
        emoji: '🦋',
        type: 'freedom',
        category: 'Freedom',
        tagline: 'The Transformer',
        
        description: {
            short: 'You are a master of transformation who brings beauty and positive change wherever you go.',
            detailed: 'The Butterfly spirit embodies transformation and graceful change. You have an extraordinary ability to adapt and reinvent yourself throughout life. Your presence brings joy and lightness to others, and you help them see beauty in everyday moments. You are not afraid of change - instead, you embrace it as an opportunity for growth and renewal.'
        },
        
        traits: {
            core: ['Transformative', 'Beautiful', 'Adaptable', 'Graceful', 'Inspiring'],
            strengths: ['Easy adaptation', 'Positive influence', 'Natural beauty', 'Growth mindset'],
            challenges: ['Can be superficial', 'Avoids difficult emotions', 'Struggles with consistency']
        },
        
        career: {
            ideal: ['Designer', 'Therapist', 'Artist', 'Event Planner', 'Life Coach'],
            environment: 'Excels in creative, people-focused roles that inspire positive change'
        },
        
        relationships: {
            compatible: ['dolphin', 'horse', 'fox'],
            complementary: ['bear', 'elephant', 'owl'],
            challenging: ['tiger', 'eagle'],
            advice: 'Develop deeper emotional connections while maintaining your uplifting nature'
        },
        
        spirituality: {
            element: 'Air',
            direction: 'Rising',
            season: 'Spring to Summer',
            message: 'Embrace change as the path to your highest potential'
        },
        
        growth: {
            focus: 'Develop depth and consistency while maintaining your gift for transformation',
            meditation: 'Visualize your continuous metamorphosis toward greater beauty',
            affirmation: 'I embrace change and help others transform with grace and beauty'
        }
    },

    dolphin: {
        id: 'dolphin',
        name: 'Dolphin',
        emoji: '🐬',
        type: 'freedom',
        category: 'Freedom',
        tagline: 'The Joyful Communicator',
        
        description: {
            short: 'You bring joy, playfulness, and exceptional communication skills to every interaction.',
            detailed: 'The Dolphin spirit embodies joy, intelligence, and social harmony. You have a natural gift for communication and can connect with people from all walks of life. Your playful nature and genuine joy are contagious, making you a beloved presence in any group. You value friendship and cooperation above competition.'
        },
        
        traits: {
            core: ['Joyful', 'Social', 'Intelligent', 'Playful', 'Communicative'],
            strengths: ['Excellent communication', 'Social intelligence', 'Natural joy', 'Team harmony'],
            challenges: ['Avoids conflict', 'Can be overly optimistic', 'Difficulty with solitude']
        },
        
        career: {
            ideal: ['Communications', 'Teaching', 'Entertainment', 'Social Work', 'Team Building'],
            environment: 'Thrives in collaborative, social environments where communication is key'
        },
        
        relationships: {
            compatible: ['butterfly', 'horse', 'elephant'],
            complementary: ['wolf', 'bear', 'lion'],
            challenging: ['tiger', 'owl'],
            advice: 'Learn to handle conflict constructively and appreciate quiet solitude'
        },
        
        spirituality: {
            element: 'Water',
            direction: 'Flow',
            season: 'Summer',
            message: 'Your joy and connection heal the world around you'
        },
        
        growth: {
            focus: 'Develop skills for handling conflict while maintaining your joyful nature',
            meditation: 'Swim in the ocean of joy while staying connected to deeper currents',
            affirmation: 'I spread joy and connection wherever I go'
        }
    },

    // STRENGTH TYPES 💪
    bear: {
        id: 'bear',
        name: 'Bear',
        emoji: '🐻',
        type: 'strength',
        category: 'Strength',
        tagline: 'The Protective Guardian',
        
        description: {
            short: 'You are a powerful protector with fierce loyalty and nurturing strength.',
            detailed: 'The Bear spirit embodies protective strength and nurturing power. You are fiercely loyal to your family and friends, and you will go to great lengths to protect those you love. Your strength is not just physical but emotional and spiritual. You have the patience to wait for the right moment and the courage to act decisively when needed.'
        },
        
        traits: {
            core: ['Protective', 'Strong', 'Loyal', 'Nurturing', 'Patient'],
            strengths: ['Fierce protection', 'Emotional strength', 'Natural leadership', 'Healing presence'],
            challenges: ['Can be overprotective', 'Slow to trust', 'Difficulty expressing vulnerability']
        },
        
        career: {
            ideal: ['Security', 'Healthcare', 'Family Services', 'Emergency Response', 'Counseling'],
            environment: 'Excels in protective, nurturing roles where strength and care are needed'
        },
        
        relationships: {
            compatible: ['wolf', 'elephant', 'whale'],
            complementary: ['dolphin', 'butterfly', 'horse'],
            challenging: ['tiger', 'fox'],
            advice: 'Learn to be vulnerable and trust others to protect themselves sometimes'
        },
        
        spirituality: {
            element: 'Earth',
            direction: 'North',
            season: 'Winter to Spring',
            message: 'Your strength protects and nurtures life around you'
        },
        
        growth: {
            focus: 'Balance your protective instincts with allowing others their independence',
            meditation: 'Feel your strong roots while reaching toward the light',
            affirmation: 'I protect with love and strength while allowing growth and freedom'
        }
    },

    wolf: {
        id: 'wolf',
        name: 'Wolf',
        emoji: '🐺',
        type: 'strength',
        category: 'Strength',
        tagline: 'The Loyal Pack Leader',
        
        description: {
            short: 'You combine fierce loyalty with strategic thinking and natural pack leadership.',
            detailed: 'The Wolf spirit represents loyalty, strategy, and pack wisdom. You understand the power of teamwork and are naturally skilled at bringing people together toward common goals. Your loyalty runs deep, and you form lasting bonds with those who earn your trust. You have excellent instincts and can sense danger or opportunity from afar.'
        },
        
        traits: {
            core: ['Loyal', 'Strategic', 'Social', 'Intuitive', 'Protective'],
            strengths: ['Team leadership', 'Strategic thinking', 'Deep loyalty', 'Intuitive wisdom'],
            challenges: ['Can be overly suspicious', 'Struggles with betrayal', 'Territorial behavior']
        },
        
        career: {
            ideal: ['Team Leader', 'Military', 'Project Manager', 'Detective', 'Coach'],
            environment: 'Thrives in team-based roles requiring strategy, loyalty, and leadership'
        },
        
        relationships: {
            compatible: ['bear', 'eagle', 'lion'],
            complementary: ['owl', 'elephant', 'dolphin'],
            challenging: ['fox', 'butterfly'],
            advice: 'Learn to trust more easily while maintaining your wise caution'
        },
        
        spirituality: {
            element: 'Moon',
            direction: 'Pack circle',
            season: 'Winter',
            message: 'Your loyalty and wisdom strengthen the bonds that hold communities together'
        },
        
        growth: {
            focus: 'Balance your protective instincts with openness to new people and experiences',
            meditation: 'Howl your truth while listening to the wisdom of the pack',
            affirmation: 'I lead with wisdom and loyalty while staying open to growth'
        }
    },

    rhino: {
        id: 'rhino',
        name: 'Rhino',
        emoji: '🦏',
        type: 'strength',
        category: 'Strength',
        tagline: 'The Determined Achiever',
        
        description: {
            short: 'You possess unstoppable determination and the strength to breakthrough any obstacle.',
            detailed: 'The Rhino spirit embodies unwavering determination and focused strength. When you set your mind to something, you pursue it with single-minded focus until you achieve your goal. Your persistence is legendary, and you rarely give up on something important to you. You have the strength to breakthrough barriers that stop others.'
        },
        
        traits: {
            core: ['Determined', 'Focused', 'Persistent', 'Strong', 'Reliable'],
            strengths: ['Unstoppable determination', 'Goal achievement', 'Breaking barriers', 'Steady progress'],
            challenges: ['Can be inflexible', 'Misses subtle cues', 'Difficulty changing direction']
        },
        
        career: {
            ideal: ['Project Management', 'Construction', 'Athletics', 'Law Enforcement', 'Research'],
            environment: 'Excels in roles requiring persistence, focus, and breakthrough thinking'
        },
        
        relationships: {
            compatible: ['bear', 'elephant', 'tiger'],
            complementary: ['owl', 'fox', 'dolphin'],
            challenging: ['butterfly', 'horse'],
            advice: 'Learn to be more flexible and consider alternative approaches to your goals'
        },
        
        spirituality: {
            element: 'Earth',
            direction: 'Forward',
            season: 'All seasons',
            message: 'Your determination can move mountains when guided by wisdom'
        },
        
        growth: {
            focus: 'Develop flexibility and sensitivity while maintaining your determined nature',
            meditation: 'Feel your strong foundation while staying open to new directions',
            affirmation: 'I pursue my goals with determination while remaining open to wisdom'
        }
    },

    // SPECIAL TYPES ✨
    fox: {
        id: 'fox',
        name: 'Fox',
        emoji: '🦊',
        type: 'wisdom',
        category: 'Wisdom',
        tagline: 'The Clever Trickster',
        
        description: {
            short: 'You navigate life with cunning intelligence and adaptable creativity.',
            detailed: 'The Fox spirit represents cleverness, adaptability, and creative problem-solving. You have a quick wit and can find solutions where others see only problems. Your intelligence is both analytical and intuitive, allowing you to read situations accurately and respond appropriately. You are charming and can adapt your approach to connect with different types of people.'
        },
        
        traits: {
            core: ['Clever', 'Adaptable', 'Creative', 'Charming', 'Resourceful'],
            strengths: ['Quick thinking', 'Creative solutions', 'Social adaptability', 'Resource management'],
            challenges: ['Can be manipulative', 'Overly cunning', 'Difficulty with direct honesty']
        },
        
        career: {
            ideal: ['Marketing', 'Sales', 'Consulting', 'Problem Solving', 'Negotiation'],
            environment: 'Thrives in dynamic environments requiring creativity and quick thinking'
        },
        
        relationships: {
            compatible: ['butterfly', 'dolphin', 'owl'],
            complementary: ['eagle', 'tiger', 'bear'],
            challenging: ['wolf', 'rhino'],
            advice: 'Balance your cleverness with genuine authenticity and direct communication'
        },
        
        spirituality: {
            element: 'Fire',
            direction: 'Between',
            season: 'Transition',
            message: 'Your cleverness is a gift - use it to help rather than manipulate'
        },
        
        growth: {
            focus: 'Develop genuine authenticity while maintaining your adaptive intelligence',
            meditation: 'Balance your quick mind with your sincere heart',
            affirmation: 'I use my intelligence and creativity to serve the highest good'
        }
    },

    deer: {
        id: 'deer',
        name: 'Deer',
        emoji: '🦌',
        type: 'freedom',
        category: 'Freedom',
        tagline: 'The Gentle Spirit',
        
        description: {
            short: 'You embody grace, gentleness, and sensitive awareness of the world around you.',
            detailed: 'The Deer spirit represents gentleness, sensitivity, and natural grace. You have a kind heart and are deeply attuned to the emotions and needs of others. Your gentle nature brings peace to tense situations, and your sensitivity allows you to perceive subtle energies that others miss. You prefer harmony over conflict and beauty over harshness.'
        },
        
        traits: {
            core: ['Gentle', 'Sensitive', 'Graceful', 'Peaceful', 'Intuitive'],
            strengths: ['Natural grace', 'Emotional sensitivity', 'Peaceful presence', 'Artistic vision'],
            challenges: ['Overly sensitive', 'Avoids confrontation', 'Can be indecisive']
        },
        
        career: {
            ideal: ['Artist', 'Counselor', 'Healer', 'Nature Guide', 'Designer'],
            environment: 'Excels in peaceful, beautiful environments focused on helping or creating'
        },
        
        relationships: {
            compatible: ['butterfly', 'whale', 'turtle'],
            complementary: ['bear', 'elephant', 'owl'],
            challenging: ['tiger', 'lion'],
            advice: 'Develop inner strength and learn to stand up for yourself when necessary'
        },
        
        spirituality: {
            element: 'Earth',
            direction: 'Forest',
            season: 'Spring',
            message: 'Your gentleness heals wounds and brings peace to the world'
        },
        
        growth: {
            focus: 'Build inner strength and assertiveness while maintaining your gentle nature',
            meditation: 'Feel your gentle strength like a flexible tree in the wind',
            affirmation: 'I am gentle yet strong, sensitive yet resilient'
        }
    },

    turtle: {
        id: 'turtle',
        name: 'Turtle',
        emoji: '🐢',
        type: 'wisdom',
        category: 'Wisdom',
        tagline: 'The Patient Sage',
        
        description: {
            short: 'You embody patience, wisdom, and steady progress toward your goals.',
            detailed: 'The Turtle spirit represents patience, longevity, and steady wisdom. You understand that the best things in life take time to develop, and you are willing to work steadily toward your goals without rushing. Your patience and persistence often lead to greater success than those who sprint ahead. You carry your security with you and adapt well to changing circumstances.'
        },
        
        traits: {
            core: ['Patient', 'Wise', 'Steady', 'Persistent', 'Adaptable'],
            strengths: ['Long-term thinking', 'Steady progress', 'Natural wisdom', 'Emotional stability'],
            challenges: ['Can be too slow', 'Overly cautious', 'Resistant to urgency']
        },
        
        career: {
            ideal: ['Researcher', 'Financial Planner', 'Educator', 'Conservationist', 'Advisor'],
            environment: 'Thrives in roles requiring patience, long-term thinking, and steady progress'
        },
        
        relationships: {
            compatible: ['elephant', 'whale', 'owl'],
            complementary: ['deer', 'bear', 'fox'],
            challenging: ['horse', 'tiger'],
            advice: 'Balance your patient nature with appropriate urgency when situations demand it'
        },
        
        spirituality: {
            element: 'Earth and Water',
            direction: 'Slow circle',
            season: 'All seasons',
            message: 'Slow and steady wins the race of life and wisdom'
        },
        
        growth: {
            focus: 'Learn to recognize when speed is needed while maintaining your patient wisdom',
            meditation: 'Feel the ancient wisdom in your slow, steady breath',
            affirmation: 'I progress steadily toward my goals with patience and wisdom'
        }
    }
};

// Quiz Questions Data
const QuizQuestions = [
    {
        id: 1,
        question: "When facing a difficult challenge, what's your first instinct?",
        type: "personality",
        weight: 3,
        options: [
            { 
                text: "Analyze the situation carefully before acting",
                animals: { owl: 3, elephant: 2, wolf: 2 } 
            },
            { 
                text: "Take charge and lead others through it",
                animals: { eagle: 3, lion: 3, tiger: 2 } 
            },
            { 
                text: "Adapt and find creative solutions",
                animals: { fox: 3, butterfly: 2, dolphin: 2 } 
            },
            { 
                text: "Stand strong and protect those around you",
                animals: { bear: 3, rhino: 2, elephant: 2 } 
            }
        ]
    },
    {
        id: 2,
        question: "What type of environment makes you feel most at peace?",
        type: "preference",
        weight: 2,
        options: [
            { text: "High mountains with vast views", animals: { eagle: 3, horse: 2, tiger: 1 } },
            { text: "Deep forests full of mystery", animals: { wolf: 3, owl: 2, bear: 2 } },
            { text: "Open oceans with endless horizons", animals: { dolphin: 3, whale: 2, turtle: 1 } },
            { text: "Peaceful meadows with gentle streams", animals: { butterfly: 2, deer: 3, rabbit: 2 } }
        ]
    },
    {
        id: 3,
        question: "How do you prefer to work on projects?",
        type: "personality",
        weight: 3,
        options: [
            { text: "Leading a team towards a common goal", animals: { lion: 3, eagle: 2, wolf: 2 } },
            { text: "Working independently with full control", animals: { tiger: 3, owl: 2, fox: 2 } },
            { text: "Collaborating closely with others", animals: { dolphin: 3, elephant: 2, wolf: 2 } },
            { text: "Supporting others behind the scenes", animals: { bear: 2, elephant: 3, deer: 2 } }
        ]
    },
    {
        id: 4,
        question: "What motivates you most in life?",
        type: "values",
        weight: 3,
        options: [
            { text: "Freedom and independence", animals: { eagle: 3, horse: 3, butterfly: 2 } },
            { text: "Wisdom and understanding", animals: { owl: 3, elephant: 2, whale: 2 } },
            { text: "Love and connection", animals: { dolphin: 3, wolf: 2, bear: 2 } },
            { text: "Achievement and recognition", animals: { lion: 3, tiger: 2, eagle: 2 } }
        ]
    },
    {
        id: 5,
        question: "In social situations, you typically...",
        type: "personality",
        weight: 2,
        options: [
            { text: "Take center stage and entertain others", animals: { lion: 3, dolphin: 2, fox: 2 } },
            { text: "Observe quietly and speak when needed", animals: { owl: 3, tiger: 2, deer: 2 } },
            { text: "Move between groups, connecting people", animals: { butterfly: 3, fox: 2, dolphin: 2 } },
            { text: "Stay close to a few trusted friends", animals: { wolf: 3, bear: 2, elephant: 2 } }
        ]
    },
    {
        id: 6,
        question: "Your ideal vacation would be...",
        type: "preference",
        weight: 2,
        options: [
            { text: "An adventurous expedition to unexplored places", animals: { tiger: 3, eagle: 2, horse: 2 } },
            { text: "A peaceful retreat in nature", animals: { deer: 3, butterfly: 2, turtle: 2 } },
            { text: "A cultural journey to learn new things", animals: { elephant: 3, owl: 2, dolphin: 2 } },
            { text: "A fun trip with family and friends", animals: { wolf: 2, bear: 3, dolphin: 2 } }
        ]
    },
    {
        id: 7,
        question: "When making important decisions, you rely on...",
        type: "thinking",
        weight: 3,
        options: [
            { text: "Logical analysis and facts", animals: { owl: 3, elephant: 2, tiger: 1 } },
            { text: "Gut instinct and intuition", animals: { wolf: 3, fox: 2, butterfly: 2 } },
            { text: "Input from trusted advisors", animals: { elephant: 3, bear: 2, dolphin: 2 } },
            { text: "Quick thinking and bold action", animals: { eagle: 3, lion: 2, tiger: 2 } }
        ]
    },
    {
        id: 8,
        question: "What's your approach to conflict?",
        type: "situation",
        weight: 2,
        options: [
            { text: "Face it head-on with confidence", animals: { lion: 3, tiger: 2, rhino: 2 } },
            { text: "Find a diplomatic solution", animals: { elephant: 3, dolphin: 2, fox: 2 } },
            { text: "Avoid it if possible", animals: { deer: 3, butterfly: 2, turtle: 2 } },
            { text: "Protect others while staying strong", animals: { bear: 3, wolf: 2, elephant: 1 } }
        ]
    },
    {
        id: 9,
        question: "What role do you play in your friend group?",
        type: "social",
        weight: 2,
        options: [
            { text: "The leader who organizes everything", animals: { eagle: 3, lion: 2, wolf: 2 } },
            { text: "The wise one who gives great advice", animals: { owl: 3, elephant: 3, whale: 2 } },
            { text: "The fun one who brings joy and laughter", animals: { dolphin: 3, fox: 2, butterfly: 2 } },
            { text: "The loyal one who's always there", animals: { wolf: 3, bear: 3, elephant: 2 } }
        ]
    },
    {
        id: 10,
        question: "What time of day do you feel most energetic?",
        type: "preference",
        weight: 1,
        options: [
            { text: "Early morning when the world is quiet", animals: { eagle: 2, deer: 3, butterfly: 2 } },
            { text: "Late night when others are sleeping", animals: { owl: 3, wolf: 2, tiger: 2 } },
            { text: "Midday when everything is active", animals: { lion: 3, dolphin: 2, fox: 2 } },
            { text: "Evening when the day winds down", animals: { bear: 2, elephant: 2, turtle: 3 } }
        ]
    },
    {
        id: 11,
        question: "Your greatest strength is probably your...",
        type: "strength",
        weight: 3,
        options: [
            { text: "Intelligence and wisdom", animals: { owl: 3, elephant: 3, whale: 2 } },
            { text: "Courage and determination", animals: { lion: 3, tiger: 3, eagle: 2 } },
            { text: "Loyalty and dependability", animals: { wolf: 3, bear: 3, elephant: 2 } },
            { text: "Adaptability and creativity", animals: { fox: 3, butterfly: 3, dolphin: 2 } }
        ]
    },
    {
        id: 12,
        question: "If you could have any superpower, it would be...",
        type: "aspiration",
        weight: 2,
        options: [
            { text: "The ability to fly and see everything", animals: { eagle: 3, butterfly: 2, owl: 1 } },
            { text: "Super strength to protect others", animals: { bear: 3, rhino: 2, lion: 2 } },
            { text: "Mind reading to understand people", animals: { dolphin: 3, wolf: 2, elephant: 2 } },
            { text: "Invisibility to observe without being seen", animals: { owl: 2, fox: 3, tiger: 2 } }
        ]
    }
];

// DOM Elements
const elements = {
    // Pages
    landingPage: document.getElementById('landing-page'),
    quizPage: document.getElementById('quiz-page'),
    resultPage: document.getElementById('result-page'),
    
    // Buttons
    startQuizBtn: document.getElementById('start-quiz-btn'),
    startQuizBtn2: document.getElementById('start-quiz-btn-2'),
    quizExitBtn: document.getElementById('quiz-exit'),
    
    // Quiz Elements
    progressFill: document.getElementById('progress-fill'),
    progressText: document.getElementById('progress-text'),
    questionTitle: document.getElementById('question-title'),
    answersGrid: document.getElementById('answers-grid'),
    
    // Result Elements
    resultContent: document.getElementById('result-content')
};

// Page Navigation
function showPage(pageName) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show target page
    const targetPage = document.getElementById(`${pageName}-page`);
    if (targetPage) {
        targetPage.classList.add('active');
        AppState.currentPage = pageName;
        
        // Update navigation active state
        updateNavigation(pageName);
        
        // Initialize page-specific functionality
        initializePage(pageName);
        
        // Scroll to top
        window.scrollTo(0, 0);
    }
}

function updateNavigation(activePage) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`[href="#${activePage}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

function initializePage(pageName) {
    switch (pageName) {
        case 'animals':
            initializeAnimalsPage();
            break;
        case 'faq':
            initializeFAQPage();
            break;
        case 'contact':
            initializeContactPage();
            break;
        case 'blog':
            initializeBlogPage();
            break;
    }
}

// Blog Page Functions
function initializeBlogPage() {
    document.querySelectorAll('.blog-post').forEach(post => {
        post.addEventListener('click', () => {
            // For now, just show a coming soon message
            alert('Full blog posts coming soon! 📖✨\nSubscribe to our newsletter to be notified when they\'re available.');
        });
    });
}

// Animals Page Functions
function initializeAnimalsPage() {
    renderAnimalsGrid();
    setupAnimalFilters();
}

function renderAnimalsGrid(filterType = 'all') {
    const animalsGrid = document.getElementById('animals-grid');
    if (!animalsGrid) return;
    
    const animals = Object.values(SpiritAnimals);
    const filteredAnimals = filterType === 'all' 
        ? animals 
        : animals.filter(animal => animal.type === filterType);
    
    animalsGrid.innerHTML = filteredAnimals.map(animal => `
        <div class="animal-detail-card" data-animal="${animal.id}">
            <div class="animal-detail-header">
                <div class="animal-detail-emoji">${animal.emoji}</div>
                <h3 class="animal-detail-name">${animal.name}</h3>
                <p class="animal-detail-tagline">${animal.tagline}</p>
                <span class="animal-detail-category">${animal.category}</span>
            </div>
            <p class="animal-detail-description">${animal.description.short}</p>
            <div class="animal-detail-traits">
                ${animal.traits.core.slice(0, 3).map(trait => 
                    `<span class="animal-trait-tag">${trait}</span>`
                ).join('')}
            </div>
        </div>
    `).join('');
    
    // Add click handlers for animal cards
    document.querySelectorAll('.animal-detail-card').forEach(card => {
        card.addEventListener('click', () => {
            const animalId = card.dataset.animal;
            showAnimalDetail(animalId);
        });
    });
}

function setupAnimalFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active filter
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter animals
            const filterType = btn.dataset.type;
            renderAnimalsGrid(filterType);
        });
    });
}

function showAnimalDetail(animalId) {
    const animal = SpiritAnimals[animalId];
    if (!animal) return;
    
    // Create a simple modal or show detailed view
    // For now, we'll simulate a quiz result with this animal
    AppState.result = { animal: animalId, score: 100, allScores: {} };
    showResult();
}

// FAQ Page Functions
function initializeFAQPage() {
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all other FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Toggle current item
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
}

// Contact Page Functions
function initializeContactPage() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
}

function handleContactForm(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('contact-name').value,
        email: document.getElementById('contact-email').value,
        subject: document.getElementById('contact-subject').value,
        message: document.getElementById('contact-message').value
    };
    
    // Simulate form submission
    alert(`Thank you ${formData.name}! 🌟\nYour message has been received. We'll get back to you soon!`);
    
    // Reset form
    document.getElementById('contact-form').reset();
}

// Navigation Event Handlers
function initializeNavigation() {
    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            const pageName = href.replace('#', '');
            
            if (pageName === 'home') {
                showPage('landing');
            } else {
                showPage(pageName);
            }
        });
    });
    
    // Footer links - map to appropriate pages
    const footerLinkMap = {
        '#quiz': 'landing',
        '#animals': 'animals',
        '#about': 'about',
        '#blog': 'blog',
        '#leadership': { page: 'animals', filter: 'leadership' },
        '#wisdom': { page: 'animals', filter: 'wisdom' },
        '#freedom': { page: 'animals', filter: 'freedom' },
        '#strength': { page: 'animals', filter: 'strength' },
        '#faq': 'faq',
        '#contact': 'contact',
        '#help': 'faq',
        '#feedback': 'contact'
    };
    
    document.querySelectorAll('.footer-links a, .legal-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            const mapping = footerLinkMap[href];
            
            if (typeof mapping === 'string') {
                showPage(mapping);
            } else if (mapping && mapping.page === 'animals') {
                // Go to animals page and apply filter
                showPage('animals');
                setTimeout(() => {
                    const filterBtn = document.querySelector(`[data-type="${mapping.filter}"]`);
                    if (filterBtn) {
                        filterBtn.click();
                    }
                }, 100);
            }
        });
    });
    
    // Social links - add some basic functionality
    document.querySelectorAll('.social-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const label = link.getAttribute('aria-label');
            alert(`${label} sharing coming soon! 📱✨`);
        });
    });
}

// Quiz Functions
function startQuiz() {
    AppState.quizStarted = true;
    AppState.currentQuestion = 0;
    AppState.answers = [];
    
    // Track quiz start event
    if (typeof trackQuizEvent === 'function') {
        trackQuizEvent('quiz_started', 'spirit_animal_quiz');
    }
    
    showPage('quiz');
    showQuestion(0);
}

function showQuestion(questionIndex) {
    const question = QuizQuestions[questionIndex];
    if (!question) return;
    
    // Update progress
    const progress = ((questionIndex + 1) / AppState.totalQuestions) * 100;
    elements.progressFill.style.width = `${progress}%`;
    elements.progressText.textContent = `Question ${questionIndex + 1} of ${AppState.totalQuestions}`;
    
    // Update question
    elements.questionTitle.textContent = question.question;
    
    // Clear and populate answers
    elements.answersGrid.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const answerDiv = document.createElement('div');
        answerDiv.className = 'answer-option';
        answerDiv.textContent = option.text;
        answerDiv.dataset.optionIndex = index;
        
        answerDiv.addEventListener('click', () => selectAnswer(questionIndex, index));
        
        elements.answersGrid.appendChild(answerDiv);
    });
}

function selectAnswer(questionIndex, optionIndex) {
    const question = QuizQuestions[questionIndex];
    const selectedOption = question.options[optionIndex];
    
    // Store answer
    AppState.answers[questionIndex] = {
        questionId: question.id,
        optionIndex: optionIndex,
        animals: selectedOption.animals,
        weight: question.weight
    };
    
    // Visual feedback
    document.querySelectorAll('.answer-option').forEach(option => {
        option.classList.remove('selected');
    });
    document.querySelector(`[data-option-index="${optionIndex}"]`).classList.add('selected');
    
    // Move to next question after a short delay
    setTimeout(() => {
        if (questionIndex < AppState.totalQuestions - 1) {
            AppState.currentQuestion = questionIndex + 1;
            showQuestion(AppState.currentQuestion);
        } else {
            calculateResult();
        }
    }, 800);
}

function calculateResult() {
    const animalScores = {};
    
    // Calculate scores for each animal
    AppState.answers.forEach(answer => {
        Object.entries(answer.animals).forEach(([animal, points]) => {
            if (!animalScores[animal]) {
                animalScores[animal] = 0;
            }
            animalScores[animal] += points * answer.weight;
        });
    });
    
    // Find the highest scoring animal
    let topAnimal = null;
    let topScore = 0;
    
    Object.entries(animalScores).forEach(([animal, score]) => {
        if (score > topScore) {
            topScore = score;
            topAnimal = animal;
        }
    });
    
    AppState.result = {
        animal: topAnimal,
        score: topScore,
        allScores: animalScores
    };
    
    // Track quiz completion and result
    if (typeof trackQuizEvent === 'function') {
        trackQuizEvent('quiz_completed', `result_${topAnimal}`);
        trackQuizEvent('spirit_animal_discovered', topAnimal);
    }
    
    showResult();
}

function showResult() {
    const animalData = SpiritAnimals[AppState.result.animal];
    if (!animalData) {
        // Fallback if animal not found
        elements.resultContent.innerHTML = `
            <div style="text-align: center; color: white;">
                <h2 style="font-size: 3rem; margin-bottom: 1rem;">🎉 Quiz Complete!</h2>
                <p style="font-size: 1.5rem; margin-bottom: 2rem;">Your spirit animal is: <strong>${AppState.result.animal}</strong></p>
                <button onclick="startQuiz()" class="cta-button">Take Quiz Again</button>
            </div>
        `;
        showPage('result');
        return;
    }
    
    elements.resultContent.innerHTML = `
        <div class="result-card">
            <div class="result-header">
                <div class="result-animal-icon">${animalData.emoji}</div>
                <h1 class="result-animal-name">${animalData.name}</h1>
                <p class="result-tagline">${animalData.tagline}</p>
                <span class="result-category">${animalData.category} Type</span>
            </div>
            
            <div class="result-description">
                <p class="result-short-desc">${animalData.description.short}</p>
                <p class="result-detailed-desc">${animalData.description.detailed}</p>
            </div>
            
            <div class="result-traits">
                <h3>Your Core Traits</h3>
                <div class="traits-grid">
                    ${animalData.traits.core.map(trait => `
                        <span class="trait-tag">${trait}</span>
                    `).join('')}
                </div>
            </div>
            
            <div class="result-sections">
                <div class="result-section">
                    <h4>💪 Strengths</h4>
                    <ul>
                        ${animalData.traits.strengths.map(strength => `
                            <li>${strength}</li>
                        `).join('')}
                    </ul>
                </div>
                
                <div class="result-section">
                    <h4>⚡ Growth Areas</h4>
                    <ul>
                        ${animalData.traits.challenges.map(challenge => `
                            <li>${challenge}</li>
                        `).join('')}
                    </ul>
                </div>
                
                <div class="result-section">
                    <h4>💼 Ideal Careers</h4>
                    <ul>
                        ${animalData.career.ideal.slice(0, 3).map(career => `
                            <li>${career}</li>
                        `).join('')}
                    </ul>
                </div>
                
                <div class="result-section">
                    <h4>🤝 Compatible Animals</h4>
                    <div class="compatible-animals">
                        ${animalData.relationships.compatible.map(animalId => {
                            const animal = SpiritAnimals[animalId];
                            return animal ? `
                                <div class="compatible-animal">
                                    <span class="animal-emoji">${animal.emoji}</span>
                                    <span class="animal-name">${animal.name}</span>
                                </div>
                            ` : '';
                        }).join('')}
                    </div>
                </div>
            </div>
            
            <div class="result-spiritual">
                <h3>🔮 Spiritual Guidance</h3>
                <p class="spiritual-message">"${animalData.spirituality.message}"</p>
                <p class="growth-focus"><strong>Growth Focus:</strong> ${animalData.growth.focus}</p>
                <p class="affirmation"><strong>Daily Affirmation:</strong> "${animalData.growth.affirmation}"</p>
            </div>
            
            <div class="result-actions">
                <button id="share-result-btn" class="btn-primary">
                    <span>Share My Result</span>
                    <span>📱</span>
                </button>
                <button onclick="startQuiz()" class="btn-secondary">
                    <span>Take Quiz Again</span>
                    <span>🔄</span>
                </button>
            </div>
        </div>
    `;
    
    // Add share functionality
    const shareBtn = document.getElementById('share-result-btn');
    if (shareBtn) {
        shareBtn.addEventListener('click', () => shareResult(animalData));
    }
    
    showPage('result');
    
    // Trigger result animation
    setTimeout(() => {
        const resultCard = document.querySelector('.result-card');
        if (resultCard) {
            resultCard.classList.add('show');
        }
    }, 100);
}

function shareResult(animalData) {
    const shareText = `I just discovered my spirit animal! 🦌✨\n\nI'm a ${animalData.name} ${animalData.emoji} - ${animalData.tagline}\n\n"${animalData.description.short}"\n\nFind your spirit animal at: ${window.location.href}`;
    
    // Track share event
    if (typeof trackQuizEvent === 'function') {
        trackQuizEvent('result_shared', `${animalData.name}_spirit_animal`);
    }
    
    if (navigator.share) {
        navigator.share({
            title: `My Spirit Animal: ${animalData.name}`,
            text: shareText,
            url: window.location.href
        }).catch(err => console.log('Share failed:', err));
    } else {
        // Fallback to copying to clipboard
        navigator.clipboard.writeText(shareText).then(() => {
            alert('Result copied to clipboard! 📋✨\nPaste it anywhere to share your spirit animal!');
        }).catch(() => {
            // Final fallback - show share text
            prompt('Copy this text to share your result:', shareText);
        });
    }
}

function exitQuiz() {
    if (confirm('Are you sure you want to exit the quiz? Your progress will be lost.')) {
        AppState.quizStarted = false;
        AppState.currentQuestion = 0;
        AppState.answers = [];
        showPage('landing');
    }
}

// Gender Selection Functions
function handleGenderSelection(gender) {
    AppState.selectedGender = gender;
    
    // Update UI to show selection
    document.querySelectorAll('.gender-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    const selectedOption = document.querySelector(`[data-gender="${gender}"]`);
    if (selectedOption) {
        selectedOption.classList.add('selected');
    }
    
    // Start quiz after a short delay for visual feedback
    setTimeout(() => {
        startQuiz();
    }, 800);
    
    console.log(`Gender selected: ${gender}`);
}

// Event Listeners
function initializeEventListeners() {
    // Gender selection
    document.querySelectorAll('.gender-option').forEach(option => {
        option.addEventListener('click', () => {
            const gender = option.dataset.gender;
            handleGenderSelection(gender);
        });
    });
    
    // Start quiz buttons (if any remain)
    if (elements.startQuizBtn) {
        elements.startQuizBtn.addEventListener('click', startQuiz);
    }
    if (elements.startQuizBtn2) {
        elements.startQuizBtn2.addEventListener('click', startQuiz);
    }
    
    // Exit quiz button
    if (elements.quizExitBtn) {
        elements.quizExitBtn.addEventListener('click', exitQuiz);
    }
    
    // Initialize navigation
    initializeNavigation();
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('🦌 Spirit Animal Quiz initialized!');
    initializeEventListeners();
    
    
    // Add some visual flair to the landing page
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
    
    // Initialize newsletter subscription
    const newsletterBtn = document.querySelector('.newsletter-btn');
    if (newsletterBtn) {
        newsletterBtn.addEventListener('click', handleNewsletterSubscription);
    }
    
    // Close modal when clicking outside
    const policyModal = document.getElementById('policy-modal');
    if (policyModal) {
        policyModal.addEventListener('click', (e) => {
            if (e.target === policyModal) {
                closePolicyModal();
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const modal = document.getElementById('policy-modal');
            if (modal && modal.classList.contains('active')) {
                closePolicyModal();
            }
        }
    });
});

// Utility function for debugging
function debugState() {
    console.log('Current App State:', AppState);
    console.log('Current Answers:', AppState.answers);
    if (AppState.result) {
        console.log('Quiz Result:', AppState.result);
    }
}

// Legal Policies Content
const LegalPolicies = {
    privacy: {
        title: "Privacy Policy",
        content: `
            <h3>Information We Collect</h3>
            <p>Spirit Guide is committed to protecting your privacy. This policy explains how we collect, use, and protect your information when you use our spirit animal quiz.</p>
            
            <h4>Personal Information</h4>
            <ul>
                <li>We do not collect personal information unless you voluntarily provide it (e.g., email for newsletter)</li>
                <li>Quiz responses are stored locally in your browser and are not transmitted to our servers</li>
                <li>We may collect anonymous usage analytics to improve our service</li>
            </ul>
            
            <h4>Cookies and Local Storage</h4>
            <ul>
                <li>We use cookies and local storage to save your quiz progress and preferences</li>
                <li>These are essential for the functionality of our quiz</li>
                <li>You can clear this data through your browser settings</li>
            </ul>
            
            <h3>How We Use Information</h3>
            <p>Any information we collect is used solely to:</p>
            <ul>
                <li>Provide and improve our spirit animal quiz experience</li>
                <li>Send newsletter content if you've subscribed</li>
                <li>Analyze usage patterns to enhance our service</li>
            </ul>
            
            <h3>Data Security</h3>
            <p>We implement appropriate security measures to protect your information. Your quiz results are stored locally on your device and are not shared with third parties.</p>
            
            <h3>Contact Us</h3>
            <p>If you have questions about this privacy policy, please contact us at privacy@spiritguide.com</p>
            
            <p><em>Last updated: December 2024</em></p>
        `
    },
    
    terms: {
        title: "Terms of Service",
        content: `
            <h3>Acceptance of Terms</h3>
            <p>By using Spirit Guide, you agree to these terms of service. If you do not agree, please do not use our service.</p>
            
            <h3>Description of Service</h3>
            <p>Spirit Guide provides a personality quiz designed for entertainment purposes to suggest which spirit animal aligns with your personality traits.</p>
            
            <h4>Important Disclaimers</h4>
            <ul>
                <li>Our quiz is for entertainment and self-reflection purposes only</li>
                <li>Results are not scientifically validated personality assessments</li>
                <li>We do not claim any spiritual or supernatural abilities</li>
            </ul>
            
            <h3>User Responsibilities</h3>
            <ul>
                <li>Use the service respectfully and lawfully</li>
                <li>Do not attempt to reverse engineer or exploit our quiz algorithm</li>
                <li>Respect intellectual property rights</li>
            </ul>
            
            <h3>Intellectual Property</h3>
            <p>All content, including quiz questions, animal descriptions, and website design, is owned by Spirit Guide and protected by copyright law.</p>
            
            <h3>Limitation of Liability</h3>
            <p>Spirit Guide is provided "as is" without warranties. We are not liable for any decisions made based on quiz results.</p>
            
            <h3>Changes to Terms</h3>
            <p>We may update these terms periodically. Continued use constitutes acceptance of updated terms.</p>
            
            <p><em>Last updated: December 2024</em></p>
        `
    },
    
    cookies: {
        title: "Cookie Policy",
        content: `
            <h3>What Are Cookies</h3>
            <p>Cookies are small text files stored on your device when you visit our website. We use them to enhance your experience and improve our service.</p>
            
            <h3>Types of Cookies We Use</h3>
            
            <h4>Essential Cookies</h4>
            <ul>
                <li><strong>Quiz Progress:</strong> Saves your current quiz progress</li>
                <li><strong>Preferences:</strong> Remembers your settings and preferences</li>
                <li><strong>Session:</strong> Maintains your session state during your visit</li>
            </ul>
            
            <h4>Analytics Cookies</h4>
            <ul>
                <li><strong>Usage Analytics:</strong> Helps us understand how visitors use our site</li>
                <li><strong>Performance:</strong> Monitors site performance and user experience</li>
            </ul>
            
            <h3>Managing Cookies</h3>
            <p>You can control cookies through your browser settings:</p>
            <ul>
                <li>Block all cookies (may affect site functionality)</li>
                <li>Delete existing cookies</li>
                <li>Set preferences for future cookies</li>
            </ul>
            
            <h3>Third-Party Cookies</h3>
            <p>We may use third-party services that set their own cookies. These are governed by their respective privacy policies.</p>
            
            <p><em>Last updated: December 2024</em></p>
        `
    },
    
    disclaimer: {
        title: "Disclaimer",
        content: `
            <h3>Entertainment Purpose</h3>
            <p>Spirit Guide is designed purely for entertainment and self-reflection. Our spirit animal quiz is not a scientific psychological assessment.</p>
            
            <h3>No Professional Advice</h3>
            <ul>
                <li>Results should not be used for making important life decisions</li>
                <li>We do not provide professional psychological or spiritual counseling</li>
                <li>Consult qualified professionals for serious personal guidance</li>
            </ul>
            
            <h3>Cultural Sensitivity</h3>
            <p>We respect all cultural and spiritual traditions. Our quiz draws inspiration from various cultures' relationships with animals, presented respectfully for modern audiences.</p>
            
            <h3>Accuracy of Information</h3>
            <ul>
                <li>We strive for accuracy but cannot guarantee completeness</li>
                <li>Animal descriptions are generalized personality archetypes</li>
                <li>Individual results may vary and should be interpreted personally</li>
            </ul>
            
            <h3>External Links</h3>
            <p>Our website may contain links to external sites. We are not responsible for their content or privacy practices.</p>
            
            <h3>Age Restrictions</h3>
            <p>Our service is intended for users 13 years and older. Users under 18 should have parental guidance.</p>
            
            <p><em>Last updated: December 2024</em></p>
        `
    }
};

// Policy Modal Functions
function showPrivacyPolicy() {
    showPolicyModal('privacy');
}

function showTermsOfService() {
    showPolicyModal('terms');
}

function showCookiePolicy() {
    showPolicyModal('cookies');
}

function showDisclaimer() {
    showPolicyModal('disclaimer');
}

function showPolicyModal(policyType) {
    const modal = document.getElementById('policy-modal');
    const title = document.getElementById('policy-title');
    const content = document.getElementById('policy-content');
    
    const policy = LegalPolicies[policyType];
    if (policy) {
        title.textContent = policy.title;
        content.innerHTML = policy.content;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closePolicyModal() {
    const modal = document.getElementById('policy-modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Newsletter Subscription
function handleNewsletterSubscription() {
    const input = document.querySelector('.newsletter-input');
    const email = input.value.trim();
    
    if (!email) {
        alert('Please enter your email address');
        return;
    }
    
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // For now, just show a success message
    // In a real app, you'd send this to your backend
    alert('Thank you for subscribing! 🌟');
    input.value = '';
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Initialize event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Start quiz buttons
    if (elements.startQuizBtn) {
        elements.startQuizBtn.addEventListener('click', startQuiz);
    }
    if (elements.startQuizBtn2) {
        elements.startQuizBtn2.addEventListener('click', startQuiz);
    }
    
    // Exit quiz button
    if (elements.quizExitBtn) {
        elements.quizExitBtn.addEventListener('click', exitQuiz);
    }
});

// Export for potential future use
window.SpiritAnimalQuiz = {
    AppState,
    startQuiz,
    loadQuestion,
    selectAnswer,
    finishQuiz,
    calculateSpiritAnimal,
    exitQuiz,
    showPage,
    debugState,
    showPrivacyPolicy,
    showTermsOfService,
    showCookiePolicy,
    showDisclaimer,
    closePolicyModal
};

// Make key functions globally available for HTML onclick handlers
window.showPage = showPage;
window.startQuiz = startQuiz;
window.showPrivacyPolicy = showPrivacyPolicy;
window.showTermsOfService = showTermsOfService;
window.showCookiePolicy = showCookiePolicy;
window.showDisclaimer = showDisclaimer;
window.closePolicyModal = closePolicyModal;