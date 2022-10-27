import {Link} from 'react-router-dom'
const About = () => {
  return (
    <section className='section'>
      <h2>About</h2>
      <Link to="/" className='btn'>Back Home</Link>
      {/* so now we can nicely go from page page without that full page refresh. again, if we want to navigate around out project, we want to grab the link component, its looking for one thing and its looking for two prop and in here you want to pass in the same value that you already have here */}
    </section>
  );
};
export default About;
