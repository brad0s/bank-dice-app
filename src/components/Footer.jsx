import GithubIcon from '../assets/github-icon.svg';

function Footer() {
  return (
    <>
      <footer style={{ padding: '1rem' }}>
        <p>
          <small>
            <a
              href='https://github.com/brad0s/bank-dice-app'
              className='github-link'
              target='_blank'
              style={{
                color: 'rgba(255, 255, 255, 0.87)',
                textDecoration: 'none',
              }}
            >
              <img
                src={GithubIcon}
                alt='GitHub Icon'
                style={{ width: '20px', height: '20px', verticalAlign: 'middle' }}
              />
              <span style={{ marginLeft: '8px' }}>View on GitHub</span>
            </a>
          </small>
        </p>
        <p>
          <small>
            © {new Date().getFullYear()}{' '}
            <a
              href='https://braden-wright.dev/'
              target='_blank'
              style={{
                color: 'rgba(255, 255, 255, 0.87)',
                textDecoration: 'underline',
              }}
            >
              Braden Wright
            </a>
            . All rights reserved.
          </small>
        </p>
      </footer>
    </>
  );
}

export default Footer;
