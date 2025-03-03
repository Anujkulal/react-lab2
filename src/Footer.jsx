import PropTypes from 'prop-types';
const Footer = (props) => {
return (
<footer>
<p>{copyright}</p>
</footer>
);
};
Footer.propTypes = {
copyright: PropTypes.string.isRequired,
};
export default Footer;