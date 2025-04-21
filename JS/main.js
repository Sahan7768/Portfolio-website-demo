

$(document).ready(function() {
    // Initialize Isotope on the correct grid container
    var $grid = $('.project-area .grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
    });

    // Store current filter values
    var currentFilter = '*';
    var currentLogoFilter = '*';

    // Filter buttons
    $('.button-group > button').on('click', function() {
        // Skip if it's the logo filter container or select element
        if ($(this).hasClass('logo-filter') || $(this).is('select')) return;
        
        $('.button-group > button').removeClass('active');
        $(this).addClass('active');
        
        currentFilter = $(this).attr('data-filter') || '*';
        applyFilters();
    });

    // Logo type filter
    $('#logoFilter').on('change', function() {
        currentLogoFilter = $(this).val();
        applyFilters();
        
        // Update button states
        $('.button-group > button').removeClass('active');
        $('.button-group > button[data-filter=".logo-design"]').addClass('active');
    });

    // Combine both filters
    function applyFilters() {
        var combinedFilter = currentFilter;
        
        // If we're filtering logos, combine with logo type filter
        if (currentFilter === '.logo-design' && currentLogoFilter !== '*') {
            combinedFilter = currentLogoFilter;
        }
        
        $grid.isotope({ filter: combinedFilter });
    }

    // Initialize with "All" active
    $('.button-group > button[data-filter="*"]').addClass('active');
});