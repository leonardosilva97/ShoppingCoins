import React from 'react';

import {ActivityIndicator, Box, Button, Text} from '@components';

interface Props {
  loading: boolean;
  error?: unknown;
  refetch: () => void;
}

export function HomeEmpty({loading = false, error, refetch}: Props) {
  let component = (
    <Text bold preset="paragraphMedium">
      Não há Items a ser listado
    </Text>
  );

  if (loading) {
    component = <ActivityIndicator color="primary" />;
  }

  if (error) {
    component = (
      <>
        <Text bold mb="s16" preset="paragraphMedium">
          Não foi possivel carregar os items{' '}
        </Text>
        <Button title="Recarregar" preset="outline" onPress={refetch} />
      </>
    );
  }

  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      {component}
    </Box>
  );
}
