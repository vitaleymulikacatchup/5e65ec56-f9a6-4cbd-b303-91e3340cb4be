"use client";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Leaf, Heart, CheckCircle, Users, Stethoscope, Sparkles, Star, HelpCircle } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="small"
      background="grid"
      cardStyle="gradient-bordered"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="CannaMed"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764176388448-cpmh5tp1.jpg"
          logoAlt="CannaMed Logo"
          button={{
            text: "Shop Now",
            href: "products"
          }}
          className="bg-background border-b border-accent"
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Premium Medical Cannabis. Trusted Quality."
          description="Experience wellness through carefully curated, lab-tested cannabis products designed for your health journey."
          tag="Medical Grade"
          tagIcon={Leaf}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764176389643-9wvosebt.jpg"
          imageAlt="Cannabis medicine wellness"
          textPosition="bottom-left"
          showDimOverlay={true}
          showBlur={true}
          buttons={[
            {
              text: "Explore Products",
              href: "products"
            },
            {
              text: "Learn More",
              href: "about"
            }
          ]}
        />
      </div>
      
      <div id="about" data-section="about">
        <SplitAbout
          title="About CannaMed"
          description="Your trusted local source for premium medical cannabis. We believe in transparency, quality, and patient wellness."
          tag="Our Mission"
          tagIcon={Heart}
          bulletPoints={[
            {
              title: "Lab Tested Quality",
              description: "Every product undergoes rigorous testing for potency and purity",
              icon: CheckCircle
            },
            {
              title: "Expert Staff",
              description: "Knowledgeable consultants available to guide your wellness journey",
              icon: Users
            },
            {
              title: "Local Community",
              description: "Supporting local health and sustainability initiatives",
              icon: Leaf
            },
            {
              title: "Patient Focused",
              description: "Your health and satisfaction are our top priorities",
              icon: Stethoscope
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764176390846-wamznnfk.jpg"
          imageAlt="Medical cannabis wellness setup"
          imagePosition="right"
          textboxLayout="split"
          buttons={[
            {
              text: "Visit Us",
              href: "contact"
            }
          ]}
        />
      </div>
      
      <div id="products" data-section="products">
        <ProductCardOne
          title="Featured Products"
          description="Premium medical cannabis selections tailored to your wellness needs"
          tag="Best Sellers"
          tagIcon={Sparkles}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "1",
              name: "Premium CBD Oil",
              price: "$45.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764176392113-qulcx3xq.jpg",
              imageAlt: "CBD oil bottle"
            },
            {
              id: "2",
              name: "Medical Flower",
              price: "$12.99/gram",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764176393272-k6jss9bf.jpg",
              imageAlt: "Premium cannabis flower"
            },
            {
              id: "3",
              name: "Wellness Capsules",
              price: "$32.50",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764176394352-zdxqb3j5.jpg",
              imageAlt: "Medical capsules"
            }
          ]}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Patient Stories"
          description="Real experiences from our valued customers"
          tag="Success Stories"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          carouselMode="buttons"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Wellness Manager",
              company: "Local Community",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764176395392-ihnbsflg.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Healthcare Professional",
              company: "Wellness Center",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764176396490-kwg1gepp.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Patient Advocate",
              company: "Health Initiative",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764176398056-6hvrimyx.jpg",
              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Wellness Consultant",
              company: "Local Practice",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764176399178-v82n62ke.jpg",
              imageAlt: "David Kim"
            }
          ]}
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about our products and services"
          tag="Support"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "Are your products lab tested?",
              content: "Yes, every product undergoes comprehensive lab testing for potency, purity, and safety. We provide certificates of analysis with each purchase."
            },
            {
              id: "2",
              title: "What payment methods do you accept?",
              content: "We accept cash and debit cards. All transactions are discreet and secure."
            },
            {
              id: "3",
              title: "Do I need a medical card?",
              content: "Yes, we only serve registered medical cannabis patients with valid documentation."
            },
            {
              id: "4",
              title: "What are your store hours?",
              content: "We are open Monday through Sunday, 10 AM to 8 PM. Visit our contact page for holiday hours."
            },
            {
              id: "5",
              title: "How can I speak with a consultant?",
              content: "Our knowledgeable staff is available during all business hours. Call or visit us in person for personalized guidance."
            },
            {
              id: "6",
              title: "Do you offer online ordering?",
              content: "Currently, we operate as an in-store only dispensary to ensure proper product consultation and compliance."
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get In Touch"
          description="Have questions? Our wellness team is here to help guide your medical cannabis journey."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us how we can help...",
            rows: 5,
            required: true
          }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764176389643-9wvosebt.jpg"
          imageAlt="Contact us for wellness guidance"
          mediaPosition="right"
          buttonText="Send Message"
          onSubmit={(data) => console.log(data)}
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Shop",
              items: [
                {
                  label: "Featured Products",
                  href: "products"
                },
                {
                  label: "All Products",
                  href: "products"
                },
                {
                  label: "New Arrivals",
                  href: "products"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Contact",
                  href: "contact"
                },
                {
                  label: "Visit Us",
                  href: "contact"
                }
              ]
            },
            {
              title: "Legal",
              items: [
                {
                  label: "Terms of Service",
                  href: "terms"
                },
                {
                  label: "Privacy Policy",
                  href: "privacy"
                },
                {
                  label: "Compliance",
                  href: "compliance"
                }
              ]
            }
          ]}
          copyrightText="© 2025 CannaMed. Medical cannabis wellness."
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764176388448-cpmh5tp1.jpg"
        />
      </div>
    </ThemeProvider>
  );
}