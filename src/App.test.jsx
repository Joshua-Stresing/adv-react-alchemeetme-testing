import { render, screen } from '@testing-library/react'
import App from './App'

test('Should render the Header', () => {
  render(<App />)

  screen.getByText(/loading.../i)

  screen.getByAltText('Alchemy Logo')

  screen.findByText('Vonta')

  screen.debug()
})
