const DATA = {
    subjects: {
        academics: ['Mathematics', 'Science', 'Social Science', 'English', 'Physics', 'Chemistry', 'Biology'],
        musics: ['Hindustani Classical Vocal', 'Bollywood Vocal', 'Western Vocal', 'Piano/Keyboard', 'Electric Guitar', 'Acoustic Guitar']
    },
    states: {
        india: [
            'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 
            'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 
            'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 
            'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 
            'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 
            'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
        ],
        'united kingdom': [
            'England', 'Scotland', 'Wales', 'Northern Ireland',
            'Greater London', 'Greater Manchester', 'West Midlands', 
            'West Yorkshire', 'Merseyside', 'South Yorkshire', 
            'Tyne and Wear', 'Cornwall', 'Devon', 'Dorset', 
            'Somerset', 'Gloucestershire', 'Wiltshire'
        ],
        'united states of america': [
            'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 
            'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 
            'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 
            'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 
            'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 
            'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 
            'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 
            'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 
            'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 
            'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ],
        malaysia: [
            'Johor', 'Kedah', 'Kelantan', 'Melaka', 'Negeri Sembilan', 
            'Pahang', 'Perak', 'Perlis', 'Pulau Pinang', 'Selangor', 
            'Terengganu', 'Sabah', 'Sarawak', 'Kuala Lumpur', 'Labuan', 
            'Putrajaya'
        ],
        australia: [
            'New South Wales', 'Victoria', 'Queensland', 'South Australia', 
            'Western Australia', 'Tasmania', 'Northern Territory', 
            'Australian Capital Territory'
        ],
        canada: [
            'Ontario', 'Quebec', 'British Columbia', 'Alberta', 
            'Manitoba', 'Saskatchewan', 'Nova Scotia', 'New Brunswick', 
            'Newfoundland and Labrador', 'Prince Edward Island', 
            'Northwest Territories', 'Yukon', 'Nunavut'
        ],
        uae: [
            'Abu Dhabi', 'Dubai', 'Sharjah', 'Ajman', 'Umm Al Quwain', 
            'Ras Al Khaimah', 'Fujairah'
        ]
    }
};


$(document).ready(function() {
    // Debug function to log information
    function debugLog(message, data) {
        console.log(`DEBUG: ${message}`, data);
    }

    // Category and Subject Dropdown Handler
    function setupCategorySubjectDropdown() {
        $('#category').on('change', function() {
            const category = $(this).val();
            const $subject = $('#subject');

            debugLog('Category selected', category);

            // Reset subject dropdown
            $subject.find('option:not(:first)').remove();

            // Check if category exists in DATA.subjects
            if (category && DATA.subjects[category]) {
                // Populate subjects
                DATA.subjects[category].forEach(subject => {
                    $subject.append(`<option value="${subject.toLowerCase()}">${subject}</option>`);
                });

                debugLog('Subjects added', DATA.subjects[category]);

                // Enable the subject dropdown
                $subject.prop('disabled', false);
            } else {
                // Disable subject dropdown if no valid category
                $subject.prop('disabled', true);
                $subject.empty();
            }
        });

        // Trigger initial change to populate first category
        $('#category').trigger('change');
    }

    // Country and State Dropdown Handler
    function setupCountryStateDropdown() {
        $('#country').on('change', function() {
            const country = $(this).val();
            const $state = $('#state');

            debugLog('Country selected', country);

            // Reset state dropdown
            $state.find('option:not(:first)').remove();

            // Check if country exists in DATA.states
            if (country && DATA.states[country.toLowerCase()]) {
                // Populate states
                DATA.states[country.toLowerCase()].forEach(state => {
                    $state.append(`<option value="${state.toLowerCase()}">${state}</option>`);
                });

                debugLog('States added', DATA.states[country.toLowerCase()]);

                // Enable the state dropdown
                $state.prop('disabled', false);
            } else {
                // Disable state dropdown if no valid country
                $state.prop('disabled', true);
            }
        });
    }

    // Initialize dropdowns
    function initializeDropdowns() {
        setupCategorySubjectDropdown();
        setupCountryStateDropdown();
    }

    // Run initialization
    initializeDropdowns();

    // Additional error handling and logging
    $(document).on('change', '#category, #country', function() {
        const $this = $(this);
        const value = $this.val();
        
        if (!value) {
            console.warn(`No value selected for ${$this.attr('id')}`);
        }
    });
});
