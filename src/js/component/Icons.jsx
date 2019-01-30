/* global FontAwesomeConfig */

/**
 * 1) First you have to import the @fortawesome/fontawesome library
*/
import fontawesome from '@fortawesome/fontawesome';


/**
 * 2) Then you have to import every icon that you will use
*/
import faClock from '@fortawesome/fontawesome-free-regular/faClock';

fontawesome.config = {
  autoReplaceSvg: 'nest'
};

fontawesome.library.add(faClock);

export default Icons;