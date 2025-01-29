import React from 'react';
import {render, fireEvent, screen} from 'test-utils';
import {Button, ButtonProps} from '../Button';

function renderComponent(props?: Partial<ButtonProps>) {
  render(<Button title="Título do Botão" {...props} />);

  const titleElement = screen.getByText(/título do botão/i);

  return {
    titleElement,
  };
}

describe('Button', () => {
  it('deve renderizar corretamente', () => {
    render(<Button title="Título do Botão" />);
  });

  it('deve chamar a função onPress quando pressionado', () => {
    const mockedOnPress = jest.fn();

    render(<Button title="Título do Botão" onPress={mockedOnPress} />);

    const titleElement = screen.getByText(/título do botão/i);

    fireEvent.press(titleElement);

    expect(mockedOnPress).toHaveBeenCalled();
  });

  it('não deve chamar a função onPress quando está desabilitado e é pressionado', () => {
    const mockedOnPress = jest.fn();
    const {titleElement} = renderComponent({
      onPress: mockedOnPress,
      disabled: true,
    });

    fireEvent.press(titleElement);

    expect(mockedOnPress).not.toHaveBeenCalled();
  });
});
