import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);

const TeamSelectors = {
    CONTAINER: '#team-swiper',
    PREVIOUS_BUTTON: '.team-members__previous',
    MEMBER: 'team-member',
    NEXT_BUTTON: '.team-members__next',
};

const AdvisoryTeamSelectors = {
    CONTAINER: '#advisory-team-swiper',
    PREVIOUS_BUTTON: '.team-members__previous',
    NEXT_BUTTON: '.team-members__next',
};

const TEAM_SWIPER_CONFIG = {
    slidesPerView: 'auto',
    navigation: {
        prevEl: TeamSelectors.PREVIOUS_BUTTON,
        nextEl: TeamSelectors.NEXT_BUTTON,
    },
    slideClass: TeamSelectors.MEMBER,
    observer: true,
    observeParents: true,
};

const ADVISORY_TEAM_SWIPER_CONFIG = {
    slidesPerView: 'auto',
    navigation: {
        prevEl: AdvisoryTeamSelectors.PREVIOUS_BUTTON,
        nextEl: AdvisoryTeamSelectors.NEXT_BUTTON,
    },
    observer: true,
    observeParents: true,
};

const teamSwiper = new Swiper(TeamSelectors.CONTAINER, TEAM_SWIPER_CONFIG);
const advisoryTeamSwiper = new Swiper(
    AdvisoryTeamSelectors.CONTAINER,
    ADVISORY_TEAM_SWIPER_CONFIG,
);
