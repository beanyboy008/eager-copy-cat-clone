import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Facebook, Linkedin, Instagram, Rss } from "lucide-react";
import SocialIcon from '@/components/SocialIcon';
const Index = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've been added to our newsletter."
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };
  return <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-white">
      <div className="w-full max-w-3xl mx-auto text-center">
        {/* Logo */}
        <div className="w-20 h-20 mx-auto mb-6 bg-black flex items-center justify-center">
          <img src="/lovable-uploads/139a9f61-02e4-4844-a066-3bff224a0e9f.png" alt="The Rundown AI Logo" className="w-full h-full object-cover" />
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          The Rundown AI
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Get the latest AI news, understand why it matters, and learn 
          how to apply it in your work — all in just 5 minutes a day. Join 
          1,000,000+ subscribers.
        </p>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-2">
            <div className="relative flex-grow">
              <Input type="email" placeholder="Enter your email" className="h-12 pr-10 rounded-md" value={email} onChange={e => setEmail(e.target.value)} required />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
            </div>
            </div>
            <Button type="submit" className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white font-medium" disabled={isSubmitting}>
              {isSubmitting ? "Joining..." : "Join Free"}
            </Button>
          </div>
        </form>

        <div className="w-full flex flex-col md:flex-row items-center justify-between border-t pt-8">
          {/* Author Section */}
          <div className="mb-6 md:mb-0">
            <p className="text-sm text-gray-500">Written By</p>
            <p className="text-base font-medium text-gray-900">Rowan Cheung, +1</p>
          </div>

          {/* Social Links */}
          <div>
            <p className="text-sm text-gray-500 mb-2 md:text-right">Connect</p>
            <div className="flex items-center gap-2">
              <SocialIcon icon={Facebook} platform="Facebook" />
              <SocialIcon icon={Linkedin} platform="LinkedIn" />
              <SocialIcon icon={Instagram} platform="Instagram" />
              <SocialIcon icon={Rss} platform="RSS" />
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Index;