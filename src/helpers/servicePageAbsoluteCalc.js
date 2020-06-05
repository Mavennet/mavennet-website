/**
 *
 * I NEVER COMMENT CODE, SO THIS SHOULD BE IMPORTANT. JUST REEEEEEEEAD IT.
 *
 * In order for the sections position to work you need to do some stuff
 * There's probably a better way to solve this problem, but that's the solution for now.
 *
 * Configure the consts bellows accordingly
 *
 * - currentDesktopDesignWidth:
 *    The width of the page shown in your design tool in the desktop version
 *
 * - currentMobileDesignWidth:
 *    The width of the page shown in your design tool in the mobile version
 *
 * - backgroundImageDimensions:
 *    The image dimensions you're going to use in the background
 *    NOTE: The breakpoint for switching from mobile to desktop is defined in the
 *          respective component file. You can access that value here using the
 *          props: breakpointValue. Available in each section styled component.
 *          The breakPoint value is defined as the biggest width on the mobile image rn.
 *
 * - topValues:
 *    The place where the top values (distance from the top of the page to the
 *    top of you component/section) shown in your design tool
 *
 *
 * TODO: I believe that the image dimensions does not matter.. test that later
 * TODO: Pass all dimensions to the component file and make this responsible only
 *       for displaying purposes
 */

const currentDesktopDesignHeight = 4639.68
const currentMobileDesignHeight = 5811

const backgroundImageDimensions = {
  desktop: {
    height: 9280,
    width: 2880,
  },
  mobile: {
    height: 11622,
    width: 828,
  },
}

/**
 * Calculates the new top value according to the
 * window width
 */
const calcDesktopValue = value =>
  `${
    (getRealDesktopTopValue(value) * 100) /
    backgroundImageDimensions.desktop.width
  }vw`
const calcMobileValue = value =>
  `${
    (getRealMobileTopValue(value) * 100) /
    backgroundImageDimensions.mobile.width
  }vw`

/**
 * Given the top value showed in your design tool,
 * returns the equivalent top distance considering the real image size
 * Desktop and mobile versions
 */
const getRealDesktopTopValue = value =>
  (value * backgroundImageDimensions.desktop.height) /
  currentDesktopDesignHeight

const getRealMobileTopValue = value =>
  (value * backgroundImageDimensions.mobile.height) / currentMobileDesignHeight

const topValues = {
  main: {
    desktop: calcDesktopValue(270),
    mobile: calcMobileValue(154),
  },
  strategy: {
    desktop: calcDesktopValue(857),
    mobile: calcMobileValue(711),
  },
  design: {
    desktop: calcDesktopValue(1438),
    mobile: calcMobileValue(1611),
  },
  implementation: {
    desktop: calcDesktopValue(2251),
    mobile: calcMobileValue(2675),
  },
  operation: {
    desktop: calcDesktopValue(3141),
    mobile: calcMobileValue(3910),
  },
  contactUs: {
    desktop: calcDesktopValue(3851),
    mobile: calcMobileValue(5100),
  },
}

export const getTopValues = () => {
  return {
    main: topValues.main,
    serviceList: [
      { ...topValues.strategy },
      { ...topValues.design },
      { ...topValues.implementation },
      { ...topValues.operation },
    ],
    contactUs: topValues.contactUs,
  }
}
