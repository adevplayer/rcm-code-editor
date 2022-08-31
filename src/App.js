import * as React from 'react'
import { Container, Button,
  TextField, Box, Grid, Typography }  from '@mui/material';
import { Helmet } from 'react-helmet';

const App = () => {
  const [html, setHtml] = React.useState('<h1 id="h1">Test</h1>');
  const [css, setCss] = React.useState(`#h1 { color: green; }`);
  const [js, setJs] = React.useState(`console.log('test')`);
  const [renderJS, setRenderJS] = React.useState('');
  const [output, setOutput] = React.useState('');

  const executeCode = async () => {
    setOutput(html + `<style> ${css} </style>`);
    setRenderJS(`${js};`);
  };

  const clearAll = () => {
    setHtml('');
    setCss('');
    setJs('');
    setRenderJS('');
    setOutput('');
  };

  return (
    <Container maxWidth="xl" sx={{mt: 8}}>
      <Box
        sx={{
          height: '300px',
          overflow: 'auto'
        }}>
        <Typography variant="h3">OUTPUT:</Typography>
        <div dangerouslySetInnerHTML={{ __html:  output }} />

        <Helmet
          script={[{
            type: 'text/javascript',
            innerHTML: renderJS
          }]}
          >
        </Helmet>
      </Box>

      <Box mt={2}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Button
              variant="contained"
              onClick={executeCode}
              sx={{ mr: 2 }}
            >
              Run Code
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={clearAll}
            >
              Clear
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Box mt={2}>
        <Grid container spacing={2}>
          <Grid item md={4} xs={12}>
            <Box>
             <Typography variant="h3">HTML</Typography>
            </Box>
            <TextField
              fullWidth
              multiline
              variant="outlined"
              rows={10}
              inputProps={{ style: { fontSize: 20, color: '#E06358' }} }
              onChange={(e) => setHtml(e.target.value)}
              onKeyDown={(e) => {
                const { value } = e.target;

                if (e.key === 'Tab') {
                  e.preventDefault();

                  const cursorPosition = e.target.selectionStart;
                  const cursorEndPosition = e.target.selectionEnd;
                  const tab = '\t';

                  e.target.value =
                    value.substring(0, cursorPosition) +
                    tab +
                    value.substring(cursorEndPosition);

                  e.target.selectionStart = cursorPosition + 1;
                  e.target.selectionEnd = cursorPosition + 1;
                }
              }}
              value={html}
            />
          </Grid>

          <Grid item md={4} xs={12}>
            <Box>
              <Typography variant="h3">CSS</Typography>
            </Box>
            <TextField
              fullWidth
              multiline
              variant="outlined"
              rows={10}
              inputProps={{ style: { fontSize: 20, color: '#2196f3' }} }
              onChange={(e) => setCss(e.target.value)}
              onKeyDown={(e) => {
                const { value } = e.target;

                if (e.key === 'Tab') {
                  e.preventDefault();

                  const cursorPosition = e.target.selectionStart;
                  const cursorEndPosition = e.target.selectionEnd;
                  const tab = '\t';

                  e.target.value =
                    value.substring(0, cursorPosition) +
                    tab +
                    value.substring(cursorEndPosition);

                  e.target.selectionStart = cursorPosition + 1;
                  e.target.selectionEnd = cursorPosition + 1;
                }
              }}
              value={css}
            />
          </Grid>

          <Grid item md={4} xs={12}>
            <Box>
              <Typography variant="h3">JS</Typography>
            </Box>
            <TextField
              fullWidth
              multiline
              variant="outlined"
              rows={10}
              inputProps={{ style: { fontSize: 20, color: '#6051D2' }} }
              onChange={(e) => setJs(e.target.value)}
              onKeyDown={(e) => {
                const { value } = e.target;

                if (e.key === 'Tab') {
                  e.preventDefault();

                  const cursorPosition = e.target.selectionStart;
                  const cursorEndPosition = e.target.selectionEnd;
                  const tab = '\t';

                  e.target.value =
                    value.substring(0, cursorPosition) +
                    tab +
                    value.substring(cursorEndPosition);

                  e.target.selectionStart = cursorPosition + 1;
                  e.target.selectionEnd = cursorPosition + 1;
                }
              }}
              value={js}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
export default App;