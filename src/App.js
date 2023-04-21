import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient("https://yypxuznvsmeycrfsmxsx.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5cHh1em52c21leWNyZnNteHN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIwODQ1NzQsImV4cCI6MTk5NzY2MDU3NH0.0hYapMSbIEJPOBD1BSHs--QIrgPfeol5-HhPbbwv_OQ")


function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.name}>{country.name}</li>
      ))}
    </ul>
  );
}

export default App;
