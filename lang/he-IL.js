/* eslint-disable prettier/prettier */
export default {
    // Navigation
    MENU: {
        START: 'התחלה',
        BUILDER: 'בניית שחקן',
        MAP: 'מפה',
        MORE: 'עוד',
        MORE_WEAPONS: 'נשקים',
        MORE_ITEMS: 'פריטים',
        MORE_VEHICLES: 'כלי רכב',
        MORE_FACTIONS: 'קבוצות',
        MORE_CREATURES: 'יצורים',
        CONTACT: 'ליצור קשר',
        OPTIONS_LANG_TITLE: '> שנה שפה',
        OPTIONS_EXTRA_TITLE: '> תוספות'
    },

    // PAGE: START
    START: {
        HEADLINE_TITLE: 'הכליים הקהילתיים של האתר',
        HEADLINE_DESCRIPTION: '!כל מה שאתה צריך כדי לשרוד את הזומבי-אפוקליפסה'
    },

    // PAGE: CHARACTER-BUILDER
    BUILDER: {
        CARD: {
            OCCUPATION_TITLE: 'עבודה',
            PERK_SELECTION_TITLE: 'בחירת תוספות',

            CHARACTER_DATA_TITLE: 'נתונים של הדמות',
            CHARACTER_DATA_ATTRIBUTES_TITLE: 'מאפינים',
            CHARACTER_DATA_ATTRIBUTES_AGILITY: 'מהירות ריצה',
            CHARACTER_DATA_ATTRIBUTES_CHARISMA: 'כריזמה',
            CHARACTER_DATA_ATTRIBUTES_ENDURANCE: 'סיבולת',
            CHARACTER_DATA_ATTRIBUTES_INTELLIGENCE: 'חוכמה',
            CHARACTER_DATA_ATTRIBUTES_STRENGTH: 'חוזק',
            CHARACTER_DATA_SKILLS_TITLE: 'כישרונות',
            CHARACTER_DATA_SKILLS_COOKING: 'לבשל',
            CHARACTER_DATA_SKILLS_FARMING: 'חקלאות',
            CHARACTER_DATA_SKILLS_MECHANIC: 'מכונאי',
            CHARACTER_DATA_SKILLS_CRAFTING: 'Crafting',
            CHARACTER_DATA_SKILLS_LOCKPICKING: 'פריצת מנעולים',
            CHARACTER_DATA_SKILLS_MEDICAL: 'טיפול רפואי',

            PERK_POINTS_DESCRIPTION: 'צריך שיהיה לך סכום של 0 נקודות בשביל לסיים את השחקן.',
            PERK_POINTS_RESET_BUTTON: 'איפוס',
            PERK_POINTS_SAVE_BUTTON: 'שמירת שחקן',
            PERK_POINTS_SAVE_TEXT: 'של השחקן שלך מוכן URL.',
            PERK_POINTS_COPY_CLIPBOARD: 'העתק',

            EXTENDED_STATS_BUTTON_OPEN: 'פתח נתוני סטטוס מורחבים',
            EXTENDED_STATS_BUTTON_CLOSE: 'סגור נתוני סטטוס מורחבים',
            EXTENDED_STATS_BUTTON_WIP: '(עבודה בתהליך)'
        },
        OCCUPATION: {
            UNEMPLOYED_TITLE: 'מובטל',
            UNEMPLOYED_DESCRIPTION: 'היית לומד מוכשר אך מהיר למידה שהחליט לא להמשיך לעבוד.',
            UNEMPLOYED_BENEFIT: 'אתה מתחיל עם הבגדים שעל הגב שלך ונשק תגרה.',

            CONSTRUCTION_WORKER_TITLE: 'עובד בניין',
            CONSTRUCTION_WORKER_DESCRIPTION: 'פעם עבדת על פרויקטים של חדושים של לדיור. זו הבחירה האידיאלית אם תרצו לבנות מבנים.',
            CONSTRUCTION_WORKER_BENEFIT: 'אתה מתחיל עם בגדי עבודה ונשק תגרה.',

            REPAIR_MAN_TITLE: 'מתקן',
            REPAIR_MAN_DESCRIPTION: 'היית פעם איש תיקונים עם מגוון רחב של כישורים.',
            REPAIR_MAN_BENEFIT: 'אתה מתחיל עם לבוש סתמי וכלי נשק תגרה אקראי',

            FARMER_TITLE: 'חקלאי',
            FARMER_DESCRIPTION: 'התפרנסות כנה זה אף פעם לא משהו להתבייש בו. כולם עדיין צריכים לאכול.',
            FARMER_BENEFIT: 'אתה מתחיל עם כמה בגדים בסיסיים ותרמיל קטן עם ציוד הישרדות.',

            CHEF_TITLE: 'שֶׁף',
            CHEF_DESCRIPTION: 'תמיד אהבת להעביר זמן במטבח, מאז שהיית ילדה. עכשיו אתה צריך להשתמש בכישורי הבישול שלך כדי לשרוד.',
            CHEF_BENEFIT: 'האתה מתחיל עם בגדי העבודה שלך וסכין מטבח.',

            DOCTOR_TITLE: 'דוקטור',
            DOCTOR_DESCRIPTION: 'בתיאוריה השבועה ההיפוקרטית עדיין חלה גם לאחר שהחברה התפרקה. פעם נשבעת חובה לעזור לאלה אשר צריכים עזרה.',
            DOCTOR_BENEFIT: '',
            FIRE_FIGHTER_TITLE: 'Firefighter',
            FIRE_FIGHTER_DESCRIPTION: 'You were once a firefighter, bravely battling many of the fires that sprung up during the outbreak. You´re one of the few remaining survivors from the city.',
            FIRE_FIGHTER_BENEFIT: 'Spawn with your work outfit and a fireaxe',

            POLICE_OFFICER_TITLE: 'Police Officer',
            POLICE_OFFICER_DESCRIPTION: 'You were a police officer, once, enforcing the law. This is now a lawless world.',
            POLICE_OFFICER_BENEFIT: 'Spawn with your work outfit complete with flashlight and service pistol with a less then half empty magazine.',

            SECURITY_GUARD_TITLE: 'Security Guard',
            SECURITY_GUARD_DESCRIPTION: 'You never really slept well at night, so you became a security guard at the mall. Might not be a bad thing once the power goes out for good.',
            SECURITY_GUARD_BENEFIT: 'Spawn with your security outfit and a melee weapon.'
        },

        PERK: {
            CPR_TRAINING_TITLE: 'CPR Training',
            CPR_TRAINING_DESCRIPTION: 'Gain the ability to bring people out of unconciousness by performing CPR.',
            
            ASTRONOMER_TITLE: 'Astronomer',
            ASTRONOMER_DESCRIPTION: 'Draws a compass on the screen at night when pressing the HUD prompt key.',
            
            OBSERVANT_TITLE: 'Observant',
            OBSERVANT_DESCRIPTION: 'Perks are listed when looking at a player with the HUD prompt active',
            
            HERBALIST_TITLE: 'Herbalist',
            HERBALIST_DESCRIPTION: 'Allows you to easily identify poisonous berries and mushrooms.',
            
            PEANUT_ALLERGY_TITLE: 'Peanut Allergy',
            PEANUT_ALLERGY_DESCRIPTION: 'Triggers a severe allergic reaction when consuming foods containing peanuts. (Spawn with one epi-pen).',
            
            PARANOID_TITLE: 'Paranoid',
            PARANOID_DESCRIPTION: 'You will randomly hear gunshots that are not real.',
            
            UNIVERSAL_RECEIVER_TITLE: 'Universal Receiver',
            UNIVERSAL_RECEIVER_DESCRIPTION: 'Forces the blood type to AB+ which allows you to receive blood from anyone without triggering a hemolytic reaction.',
            
            UNIVERSAL_DONOR_TITLE: 'Universal Donor',
            UNIVERSAL_DONOR_DESCRIPTION: 'Forces the blood type to O- which anyone can receive when in need of a transfusion.',
            
            JOGGER_TITLE: 'Jogger',
            JOGGER_DESCRIPTION: 'You used to enjoy running when it was just for fun. Gain +2 Agility',
       
            NERD_TITLE: 'Nerd',
            NERD_DESCRIPTION: 'You used to play a lot of videogames in your spare time. Lose -2 Strength',
            
            CHESS_PLAYER_TITLE: 'Chess Player',
            CHESS_PLAYER_DESCRIPTION: 'You used to play competitive chess. Gain +2 Intelligence.',
            
            PARTY_BOY_TITLE: 'Party Boy',
            PARTY_BOY_DESCRIPTION: 'You used to party... a lot. Lose -2 Intelligence.',
            
            RUNNER_TITLE: 'Runner',
            RUNNER_DESCRIPTION: 'You used to enjoy running marathons. Gain +300s sprint time and +1 Agility',
            
            STRENGTH_TRAINING_TITLE: 'Strength Training',
            STRENGTH_TRAINING_DESCRIPTION: 'Your life orients around lifting when you´re not at work. Gain +2 Strength.',
            
            WEEKEND_BARTENDER_TITLE: 'Weekend Bartender',
            WEEKEND_BARTENDER_DESCRIPTION: 'You used to be a bartender on weekends, it  gave you an insight into human behavior. Gain +2 Chraisma.',
            
            WRESTLER_TITLE: 'Wrestler',
            WRESTLER_DESCRIPTION: 'You used to be a wrestler when you were younger, it made you pretty hard to bring down. Gain +2 Endurance.',
            
            AMATEUR_COOK_TITLE: 'Amateur Cook',
            AMATEUR_COOK_DESCRIPTION: 'You like to cook fancy meals at home and aren´t afraid of getting behind the stove. Gain +25 bonus to Cooking.',
            
            AWFUL_COOK_TITLE: 'Awful Cook',
            AWFUL_COOK_DESCRIPTION: 'You´re terrible behind the stove. Receive a -25 penalty to Cooking.',
            
            METALWORKER_TITLE: 'Metalworker',
            METALWORKER_DESCRIPTION: 'You´ve tinkered around with metalworking and locksmithing. Gain a +25 bonus to Lockpicking.',
            
            GREEN_THUMB_TITLE: 'Green Thumb',
            GREEN_THUMB_DESCRIPTION: 'You enjoy gardening. Gain a +25 bonus to Farming.',
            
            HOBBYIST_TITLE: 'Hobbyist',
            HOBBYIST_DESCRIPTION: 'You enjoy model trains, playing with rockets and all sorts of different gadgets. Gain a +25 bonus to Crafting',
            
            GEARHEAD_TITLE: 'Gearhead',
            GEARHEAD_DESCRIPTION: 'You spend a lot of time restoring old cars. Gain a +25 bonus to Mechanic.',
            
            VOLUNTEER_FIRE_FIGHTER_TITLE: 'Volunteer Firefighter',
            VOLUNTEER_FIRE_FIGHTER_DESCRIPTION: 'You were a volunteer firefighter when you were younger. Gain a +25 bonus to Medical.',
            
            BIG_BONED_TITLE: 'Big Boned',
            BIG_BONED_DESCRIPTION: 'Absulute unit. More limb health and +750ml max blood.',
            
            OSTEOPOROSIS_TITLE: 'Osteoporosis',
            OSTEOPOROSIS_DESCRIPTION: 'You take increased limb damage.',
            
            BRAVE_TITLE: 'Brave',
            BRAVE_DESCRIPTION: 'Less supression when taking fire.',
            
            FEARFUL_TITLE: 'Fearful',
            FEARFUL_DESCRIPTION: 'Take more supression when taking fire.',
            
            NO_FEAR_TITLE: 'No Fear',
            NO_FEAR_DESCRIPTION: 'You´ve seen it all. You do not fear death. -80% supression from taking fire.',
            
            FRIGHTFUL_TITLE: 'Frightful',
            FRIGHTFUL_DESCRIPTION: 'Additional +80% supression when being attacked.',
            
            FAST_METABOLISM_TITLE: 'Fast Metabolism',
            FAST_METABOLISM_DESCRIPTION: 'You metabolize food 50% faster.',
            
            SLOW_METABOLISM_TITLE: 'Slow Metabolism',
            SLOW_METABOLISM_DESCRIPTION: 'You metabolize food 50% more slowly.',
            
            IRON_STOMACH_TITLE: 'Iron Stomach',
            IRON_STOMACH_DESCRIPTION: 'Get sick less often when drinking and eating.',
            
            WEAK_STOMACH_TITLE: 'Weak Stomach',
            WEAK_STOMACH_DESCRIPTION: 'Get sick more often when drinking and eating.',
            
            SILENT_SEARCH_TITLE: 'Silent Search',
            SILENT_SEARCH_DESCRIPTION: 'Make 50% less noise when searching a container.',
            
            NOISY_SEARCH_TITLE: 'Noisy Search',
            NOISY_SEARCH_DESCRIPTION: 'Make 50% more noise when searching a container.',
            
            THICK_SKINNED_TITLE: 'Thick Skinned',
            THICK_SKINNED_DESCRIPTION: 'Take 15% less damage from melee attacks.',
            
            THIN_SKINNED_TITLE: 'Thin Skinned',
            THIN_SKINNED_DESCRIPTION: 'Take 15% more damage from melee attacks.',
            
            NIMBLE_FINGERS_TITLE: 'Nimble Fingers',
            NIMBLE_FINGERS_DESCRIPTION: 'Search containers 50% faster.',
            
            SAUSAGE_FINGERS_TITLE: 'Sausage Fingers',
            SAUSAGE_FINGERS_DESCRIPTION: 'Search containers 50% more slowly.',
            
            HEAVY_WEIGHT_TITLE: 'Heavy Weight',
            HEAVY_WEIGHT_DESCRIPTION: 'You get drunk far less easily.',
            
            LIGHT_WEIGHT_TITLE: 'Light Weight',
            LIGHT_WEIGHT_DESCRIPTION: 'Impact of drinking too much alcohol is amplified. Lower threshold to start feeling the effects.',
            
            LIGTH_STEP_TITLE: 'Light Step',
            LIGTH_STEP_DESCRIPTION: 'Your footsteps are 30% quieter.',
            
            HEAVY_STEP_TITLE: 'Heavy Step',
            HEAVY_STEP_DESCRIPTION: 'Your footsteps are 30% louder.'            
        }
    }
};
