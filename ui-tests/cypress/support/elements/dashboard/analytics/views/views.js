export const viewsPageElements = {
    PAGE_TITLE: 'header-title',
    PAGE_TITLE_TOOLTIP: 'header-title-tooltip',
    VIEWS_MORE_OPTION: 'analytics-views-more-option-button',
    FILTER_DATE_PICKER: 'cly-datepicker-test-id-pseudo-input-label',
}

export const viewsMetricCardElements = {
    TOTAL_VIEWS_LABEL: 'metric-card-total-views-column-label',
    TOTAL_VIEWS_VALUE: 'metric-card-total-views-column-number',
    TOTAL_VIEWS_TOOLTIP: 'metric-card-total-views-column-tooltip',
    UNIQUE_VIEWS_LABEL: 'metric-card-unique-views-column-label',
    UNIQUE_VIEWS_VALUE: 'metric-card-unique-views-column-number',
    UNIQUE_VIEWS_TOOLTIP: 'metric-card-unique-views-column-tooltip',
    BOUNCE_RATE_LABEL: 'metric-card-bounce-rate-column-label',
    BOUNCE_RATE_VALUE: 'metric-card-bounce-rate-column-number',
    BOUNCE_RATE_TOOLTIP: 'metric-card-bounce-rate-column-tooltip',
    BOUNCE_RATE_PROGRESS_CIRCLE: 'el-progress-metric-card-bounce-rate-column',
}

export const viewsEChartElements = {
    EMPTY_PAGE_ICON: 'chart-analytics-views-empty-logo',
    EMPTY_PAGE_TITLE: 'chart-analytics-views-empty-title',
    EMPTY_PAGE_SUBTITLE: 'chart-analytics-views-empty-subtitle',

    VIEWED_BASED_ON_LABEL: 'views-based-on-label',
    VIEWED_BASED_ON_SELECT: 'views-based-on-select-input-pseudo-input-label',
    FOR_LABEL: 'for-label',
    FOR_SELECT: 'filter-parameter-pseudo-input-label',

    CHART_VIEWS: 'chart-analytics-views-chart',
    CHART_TYPE_SELECT: 'chart-analytics-views-header-select-input',
    CHART_ANNOTATION_BUTTON: 'chart-type-annotation-button',
    CHART_MORE_BUTTON: 'chart-analytics-views-header-cly-chart-more-dropdown-more-option-button',
    CHART_MORE_DOWNLOAD_ITEM: 'chart-analytics-views-header-download-button',
    CHART_MORE_ZOOM_ITEM: 'chart-analytics-views-header-more-zoom-button',
    CHART_HOME_ICON: 'chart-analytics-views-legend-home-legend-icon',
    CHART_HOME_LABEL: 'chart-analytics-views-legend-home-legend-label',
    CHART_BROWSE_ICON: 'chart-analytics-views-legend-browse-legend-icon',
    CHART_BROWSE_LABEL: 'chart-analytics-views-legend-browse-legend-label',
    CHART_ACCOUNT_DETAILS_ICON: 'chart-analytics-views-legend-account-details-legend-icon',
    CHART_ACCOUNT_DETAILS_LABEL: 'chart-analytics-views-legend-account-details-legend-label',
    CHART_SETTINGS_ICON: 'chart-analytics-views-legend-settings-legend-icon',
    CHART_SETTINGS_LABEL: 'chart-analytics-views-legend-settings-legend-label',
    CHART_ABOUT_ICON: 'chart-analytics-views-legend-about-legend-icon',
    CHART_ABOUT_LABEL: 'chart-analytics-views-legend-about-legend-label',
    CHART_TERMS_AND_CONDITIONS_ICON: 'chart-analytics-views-legend-terms-and-conditions-legend-icon',
    CHART_TERMS_AND_CONDITIONS_LABEL: 'chart-analytics-views-legend-terms-and-conditions-legend-label',
}

const viewsDataTableElements = (index = 0) => {
    return {
        EMPTY_TABLE_ICON: 'datatable-analytics-views-empty-logo',
        EMPTY_TABLE_TITLE: 'datatable-analytics-views-empty-title',
        EMPTY_TABLE_SUBTITLE: 'datatable-analytics-views-empty-subtitle',

        TABLE_ROWS: '.el-table__row',
        VIEWS_FILTER: 'filter-views-select-input',
        EDIT_VIEWS_BUTTON: 'edit-views-button',
        DESELECT_ALL_BUTTON: 'deselect-all-button', 
        EDIT_COLOMNS_BUTTON: 'datatable-analytics-views-edit-columns-button',
        EXPORT_AS_BUTTON: 'datatable-analytics-views-export-as-button',
        TABLE_SEARCH_INPUT: 'datatable-analytics-views-datatable-search-input',
        COLUMN_NAME_VIEW_LABEL: 'datatable-analytics-views-label-view',
        COLUMN_NAME_VIEW_SORTABLE_ICON: 'datatable-analytics-views-sortable-icon-view',
        COLUMN_NAME_TOTAL_USERS_TILDE_LABEL: 'analytics-views-label-total-users-tilde',
        COLUMN_NAME_TOTAL_USERS_LABEL: 'analytics-views-label-total-users',
        COLUMN_NAME_TOTAL_USERS_TOOLTIP: 'analytics-views-label-total-users-tooltip',
        COLUMN_NAME_TOTAL_USERS_SORTABLE_ICON: 'datatable-analytics-total-users-sortable-icon-view',
        COLUMN_NAME_NEW_USERS_LABEL: 'datatable-analytics-views-label-new-users',
        COLUMN_NAME_NEW_USERS_SORTABLE_ICON: 'datatable-analytics-new-users-sortable-icon-view',
        COLUMN_NAME_TOTAL_VISITS_LABEL: 'datatable-analytics-views-label-total-visits',
        COLUMN_NAME_TOTAL_VISITS_SORTABLE_ICON: 'datatable-analytics-total-visits-sortable-icon-view',
        COLUMN_NAME_LANDINGS_LABEL: 'datatable-analytics-views-label-landings',
        COLUMN_NAME_LANDINGS_SORTABLE_ICON: 'datatable-analytics-landings-sortable-icon-view',
        COLUMN_NAME_EXITS_LABEL: 'datatable-analytics-views-label-exits',
        COLUMN_NAME_EXITS_SORTABLE_ICON: 'datatable-analytics-exits-sortable-icon-view',
        COLUMN_NAME_AVG_TIME_LABEL: 'datatable-analytics-views-label-avg.-time',
        COLUMN_NAME_AVG_TIME_SORTABLE_ICON: 'datatable-analytics-avg.-time-sortable-icon-view',
        COLUMN_NAME_BOUNCES_LABEL: 'datatable-analytics-views-label-bounces',
        COLUMN_NAME_BOUNCES_SORTABLE_ICON: 'datatable-analytics-bounces-sortable-icon-view',
        COLUMN_NAME_BOUNCE_RATE_LABEL: 'datatable-analytics-views-label-bounce-rate',
        COLUMN_NAME_BOUNCE_RATE_SORTABLE_ICON: 'datatable-analytics-bounce-rate-sortable-icon-view',
        COLUMN_NAME_UNIQUE_VIEWS_LABEL: 'datatable-analytics-views-label-unique-views',
        COLUMN_NAME_UNIQUE_VIEWS_SORTABLE_ICON: 'datatable-analytics-unique-views-sortable-icon-view',

        //Columns' Rows' Datas Elements 
        VIEW_CHECKBOX: 'datatable-analytics-views-' + index + '-el-checkbox-input',
        VIEW: 'datatable-analytics-views-view-' + index,
        TOTAL_USERS: 'datatable-analytics-views-u-' + index,
        NEW_USERS: 'datatable-analytics-views-n-' + index,
        TOTAL_VISITS: 'datatable-analytics-views-t-' + index,
        LANDINGS: 'datatable-analytics-views-s-' + index,
        EXITS: 'datatable-analytics-views-e-' + index,
        AVG_TIME: 'datatable-analytics-views-d-calc-' + index,
        BOUNCES: 'datatable-analytics-views-b-' + index,
        BOUNCE_RATE: 'datatable-analytics-views-br-' + index,
        UNIQUE_VIEWS: 'datatable-analytics-views-uvc-' + index,

        //PAGINATION ELEMENTS
        ITEMS_PER_PAGE_LABEL: 'datatable-analytics-views-items-per-page-label',
        PER_PAGE_COUNT_SELECT: 'datatable-analytics-views-items-per-page-count-select-input-pseudo-input-label',
        PER_PAGE_COUNT_SELECT_ICON: 'datatable-analytics-views-items-per-page-count-select-icon',
        PER_PAGE_COUNT_LABEL: 'datatable-analytics-views-items-per-page-count-select',
        PAGE_NUMBER_SELECT: 'datatable-analytics-views-page-number-select-input-pseudo-input-label',
        PAGE_NUMBER_SELECT_ICON: 'datatable-analytics-views-page-number-select-icon',
        FIRST_PAGE_ARROW_BUTTON: 'datatable-analytics-views-first-page-arrow-button',
        PREVIOUS_PAGE_ARROW_BUTTON: 'datatable-analytics-views-previous-page-arrow-button',
        NEXT_PAGE_ARROW_BUTTON: 'datatable-analytics-views-next-page-arrow-button',
        LAST_PAGE_ARROW_BUTTON: 'datatable-analytics-views-last-page-arrow-button'
    };
};

module.exports = {
    viewsPageElements,
    viewsMetricCardElements,
    viewsEChartElements,
    viewsDataTableElements
};