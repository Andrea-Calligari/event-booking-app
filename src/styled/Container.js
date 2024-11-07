import styled from 'styled-components';
import { space, layout, color, compose, variant, boxShadow } from 'styled-system';
import isPropValid from '@emotion/is-prop-valid';

const Container = styled('div').withConfig({
  shouldForwardProp: (prop) => isPropValid(prop) || prop === 'variant',
})(
  compose(
    space,
    layout,
    boxShadow,
    color,
    variant({
      variants: {
        events: {
          maxWidth: '1200px',
          margin: '0 auto',
          marginTop: '48px',
          marginBottom: '48px',
          border: '1px solid #5F7ADB',
          boxShadow: '4px 4px 8px 3px black',
          padding: '24px',
          borderRadius: '24px',
          backgroundColor: '#5F7ADB',
        },
        details: {
          maxWidth: '750px',
          margin: '0 auto',
          borderRadius: '24px',
          boxShadow: '4px 4px 8px 3px black',
          color: 'whitesmoke',
          backgroundColor: '#9D0B51',
          padding: '24px'
        },
      },
    })
  )
);

export default Container;
