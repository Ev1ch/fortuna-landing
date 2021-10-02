import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);

const Breakpoints = {
    MD: 768,
    LG: 1200,
};

const TeamSelectors = {
    CONTAINER: '#team-swiper',
    PREVIOUS_BUTTON: '.team-members__previous',
    MEMBER: 'team-member',
    NEXT_BUTTON: '.team-members__next',
};

const AdvisoryTeamSelectors = {
    CONTAINER: '#advisory-team-swiper',
    PREVIOUS_BUTTON: '.team-members__previous',
    MEMBER: 'team-member',
    NEXT_BUTTON: '.team-members__next',
};

const TEAM_SWIPER_CONFIG = {
    breakpoints: {
        0: {
            slidesPerGroup: 1,
            slidesPerView: 1,
        },
        [Breakpoints.MD]: {
            slidesPerGroup: 2,
            slidesPerView: 2,
        },
        [Breakpoints.LG]: {
            slidesPerGroup: 4,
            slidesPerView: 4,
        },
    },
    navigation: {
        prevEl: TeamSelectors.PREVIOUS_BUTTON,
        nextEl: TeamSelectors.NEXT_BUTTON,
    },
    slideClass: TeamSelectors.MEMBER,
    observer: true,
    observeParents: true,
};

const ADVISORY_TEAM_SWIPER_CONFIG = {
    breakpoints: {
        0: {
            slidesPerGroup: 1,
            slidesPerView: 1,
        },
        [Breakpoints.MD]: {
            slidesPerGroup: 2,
            slidesPerView: 2,
        },
        [Breakpoints.LG]: {
            slidesPerGroup: 4,
            slidesPerView: 4,
        },
    },
    navigation: {
        prevEl: AdvisoryTeamSelectors.PREVIOUS_BUTTON,
        nextEl: AdvisoryTeamSelectors.NEXT_BUTTON,
    },
    slideClass: AdvisoryTeamSelectors.MEMBER,
    observer: true,
    observeParents: true,
};

const teamSwiper = new Swiper(TeamSelectors.CONTAINER, TEAM_SWIPER_CONFIG);
const advisoryTeamSwiper = new Swiper(
    AdvisoryTeamSelectors.CONTAINER,
    ADVISORY_TEAM_SWIPER_CONFIG,
);

const NavigationSelectors = {
    CONTAINER: '.navigation',
    TOGGLE_BUTTON: '.navigation__toggle',
};

const NavigationClasses = {
    BURGER: 'navigation--burger',
};

const navigationEl = document.querySelector(NavigationSelectors.CONTAINER);
const navigationToggleEl = document.querySelector(
    NavigationSelectors.TOGGLE_BUTTON,
);

function toggleNavigation() {
    navigationEl.classList.toggle(NavigationClasses.BURGER);
}

navigationToggleEl.addEventListener('click', toggleNavigation);
