/** @jsxImportSource theme-ui */
import Footer from '@components/Footer';
import Header from '@components/Header';

const Layout: React.FC = (props) => (
  <div
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}
  >
    <Header />
    <main
      sx={{
        width: '100%',
        flex: '1 1 auto',
      }}
    >
      <div
        sx={{
          maxWidth: 768,
          mx: 'auto',
          px: 3,
        }}
      >
        {props.children}
      </div>
    </main>
    <Footer />
  </div>
);

export default Layout;
