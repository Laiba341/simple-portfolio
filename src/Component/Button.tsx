
import { Button } from "@/components/ui/button"; // Import with alias
import React from 'react';

const MyButton = () => { // Rename your local component to avoid conflict
  return (
    <div>
      <Button variant={"destructive"}>Click me</Button> {/* Correct the JSX tag */}
    </div>
  );
}

export default MyButton;
