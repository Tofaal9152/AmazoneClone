'use client'
import React from 'react'
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa, supabase } from '@supabase/auth-ui-shared';
import { superbase } from '@/lib/superbase/products';

const Signin = () => {
  return (
    <div className='w-1/5 text-white font-medium '>
          <Auth
    supabaseClient={superbase}
    appearance={{ theme: ThemeSupa }}
    theme='dark'
  />
    </div>
  )
}

export default Signin