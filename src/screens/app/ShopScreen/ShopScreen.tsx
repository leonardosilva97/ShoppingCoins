import React from 'react';
import {FlatList, ListRenderItemInfo, RefreshControl} from 'react-native';
import {useScrollToTop} from '@react-navigation/native';

import {Product, useProductList} from '@domain';
import {Screen, BoxBaseBody, CardItemShop, Text, Box} from '@components';
import {AppTabScreenProps} from '@routes';
import {HomeEmpty} from './components/HomeEmpty';
import {HomeHeader} from './components/HomeHeader';
import {$screen} from 'src/utils/styles';

export function ShopScreen({navigation}: AppTabScreenProps<'Shop'>) {
  const {error, loading, productList, refresh, fetchNextPage} =
    useProductList();

  function goBack() {
    navigation.goBack();
  }

  const flatListRef = React.useRef<FlatList<Product> | null>(null);
  useScrollToTop(flatListRef);

  function renderItem({item}: ListRenderItemInfo<Product>) {
    return <CardItemShop payment={() => {}} product={item} />;
  }
  function renderHeader() {
    return (
      <Box paddingHorizontal="s24" paddingVertical="s8">
        <Text semiBold preset="headingMedium">
          Shop
        </Text>
      </Box>
    );
  }

  return (
    <Screen style={$screen}>
      {/* Header roxo fixo em cima */}
      <HomeHeader onBackPress={goBack} />

      {/* BoxBaseBody aplica bordas arredondadas no topo e fundo claro */}
      <BoxBaseBody>
        <FlatList
          ref={flatListRef}
          showsVerticalScrollIndicator={false}
          data={productList}
          keyExtractor={item => String(item.id)}
          renderItem={renderItem}
          onEndReached={fetchNextPage}
          onEndReachedThreshold={0.1}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={refresh} />
          }
          refreshing={loading}
          numColumns={2}
          // Ajustar para não sobrescrever cor de fundo do BoxBaseBody
          contentContainerStyle={{
            flex: productList.length === 0 ? 1 : undefined,
            // Remova "backgroundColor: 'white'"
          }}
          columnWrapperStyle={{
            justifyContent: 'space-around',
            padding: 8,
            paddingTop: 16,
          }}
          ListHeaderComponent={renderHeader()}
          ListEmptyComponent={
            <HomeEmpty loading={loading} refetch={refresh} error={error} />
          }
        />
      </BoxBaseBody>
    </Screen>
  );
}
