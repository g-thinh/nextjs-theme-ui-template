/** @jsxImportSource theme-ui */
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
        marginTop: [2, 4],
        width: '100%',
        flex: '1 1 auto',
      }}
    >
      <div
        sx={{
          maxWidth: '48em',
          mx: 'auto',
          px: [1, 3],
        }}
      >
        {props.children}
      </div>
    </main>
  </div>
);

export default Layout;
