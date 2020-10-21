import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

import PageWrapper from '../components/UI/PageWrapper/PageWrapper';

import OrderItems from '../components/OrderItems/OrderItems';
import AvailablePacks from '../components/AvailablePacks/AvailablePacks';

import { getPrimaryNavigation, getPosts, getCV, getBanner } from '../lib/api'

export default function Home({ posts, cv, navigation, banner }) {
  return (
    <PageWrapper>
      <Head>
        <title>Next Products</title>
      </Head>

      <OrderItems />
      <AvailablePacks />
    </PageWrapper>
  )
}

/*
export async function getStaticProps() {
  const navigation = (await getPrimaryNavigation() || []); 
  const banner = (await getBanner() || []);
  const posts = (await getPosts()) || [];
  const cv = (await getCV()) || [];
  return {
    props: { posts, cv, navigation, banner },
    unstable_revalidate: 1,
  }
}
*/
