'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { GET } from '@/app/api/pages/route';
// import { getPagesData } from '@/app/lib/data/pages';
import GetPagesServer from '../Data/GetPages/GetPages';
import { flushAllTraces } from 'next/dist/trace';
import LoadingCatto from '../Utils/Loading';
import GetPageListServerCatto from '../ServerComponents/GetPageListServerCatto';
import { getPagesDataNow } from '@/app/lib/data/pagesData';


const ListCatto = () => {

  // const newPagesData = getPagesDataNow();
  // console.log('------ 888888      88888       88888       8888 ---- newPagesData ', newPagesData);

  useEffect(() => {
    const newPagesData = getPagesDataNow();
    console.log('------ 888888      88888       88888       8888 ---- newPagesData ', newPagesData);
    // getPage757();
  }, []);





  return (
    <>
      <h1 >simple List </h1>
      <GetPageListServerCatto />
    </>
  );
};

export default ListCatto;
