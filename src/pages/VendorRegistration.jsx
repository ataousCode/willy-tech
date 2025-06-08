"use client"
import { useState } from "react"
import emailjs from '@emailjs/browser'
import AnimateOnScroll from "../components/AnimateOnScroll"
import ParallaxHero from "../components/ParallaxHero"
import Button from "../components/Button"
import SectionTitle from "../components/SectionTitle"

function VendorRegistration() {
  const [formData, setFormData] = useState({
    // Restaurant Information
    restaurantName: "",
    restaurantType: "",
    cuisine: "",
    description: "",
    
    // Contact Information
    ownerName: "",
    email: "",
    phone: "",
    
    // Location Information
    address: "",
    city: "",
    state: "",
    zipCode: "",
    
    // Business Information
    businessLicense: "",
    taxId: "",
    yearsInBusiness: "",
    currentDeliveryService: "",
    
    // Operational Details
    operatingHours: {
      monday: { open: "", close: "", closed: false },
      tuesday: { open: "", close: "", closed: false },
      wednesday: { open: "", close: "", closed: false },
      thursday: { open: "", close: "", closed: false },
      friday: { open: "", close: "", closed: false },
      saturday: { open: "", close: "", closed: false },
      sunday: { open: "", close: "", closed: false }
    },
    deliveryRadius: "",
    averageOrderValue: "",
    monthlyOrderVolume: "",
    
    // Additional Information
    specialRequirements: "",
    marketingSupport: false,
    agreeToTerms: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleOperatingHoursChange = (day, field, value) => {
    setFormData(prev => ({
      ...prev,
      operatingHours: {
        ...prev.operatingHours,
        [day]: {
          ...prev.operatingHours[day],
          [field]: value
        }
      }
    }))
  }

  const formatOperatingHours = () => {
    return Object.entries(formData.operatingHours)
      .map(([day, hours]) => {
        if (hours.closed) return `${day}: Closed`
        return `${day}: ${hours.open} - ${hours.close}`
      })
      .join('\n')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const templateParams = {
        restaurant_name: formData.restaurantName,
        restaurant_type: formData.restaurantType,
        cuisine: formData.cuisine,
        description: formData.description,
        owner_name: formData.ownerName,
        email: formData.email,
        phone: formData.phone,
        address: `${formData.address}, ${formData.city}, ${formData.state} ${formData.zipCode}`,
        business_license: formData.businessLicense,
        tax_id: formData.taxId,
        years_in_business: formData.yearsInBusiness,
        current_delivery_service: formData.currentDeliveryService,
        operating_hours: formatOperatingHours(),
        delivery_radius: formData.deliveryRadius,
        average_order_value: formData.averageOrderValue,
        monthly_order_volume: formData.monthlyOrderVolume,
        special_requirements: formData.specialRequirements,
        marketing_support: formData.marketingSupport ? 'Yes' : 'No',
        submission_date: new Date().toLocaleDateString()
      }
      await emailjs.send(
        'service_s05lb0q',
        'template_ayokz3x',
        templateParams,
        'qxbZeMlXnpTar0PlY'
      )
      
      setSubmitStatus('success')
      // Reset form
      setFormData({
        restaurantName: "",
        restaurantType: "",
        cuisine: "",
        description: "",
        ownerName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        businessLicense: "",
        taxId: "",
        yearsInBusiness: "",
        currentDeliveryService: "",
        operatingHours: {
          monday: { open: "", close: "", closed: false },
          tuesday: { open: "", close: "", closed: false },
          wednesday: { open: "", close: "", closed: false },
          thursday: { open: "", close: "", closed: false },
          friday: { open: "", close: "", closed: false },
          saturday: { open: "", close: "", closed: false },
          sunday: { open: "", close: "", closed: false }
        },
        deliveryRadius: "",
        averageOrderValue: "",
        monthlyOrderVolume: "",
        specialRequirements: "",
        marketingSupport: false,
        agreeToTerms: false
      })
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero Section */}
      <ParallaxHero
        bgImage="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
        height="60vh"
        overlayColor="rgba(10, 11, 20, 0.8)"
        speed={0.5}
      >
        <div className="max-w-6xl mx-auto px-4 text-center w-full">
          <AnimateOnScroll animation="fade-down" delay={300}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-6 leading-tight">
            Rejoignez notre réseau de restaurants
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={600}>
            <p className="text-lg md:text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto mb-10 leading-relaxed">
            Inscrivez votre restaurant pour rejoindre notre liste d'attente et faire partie de l'avenir de la livraison de nourriture
            </p>
          </AnimateOnScroll>
        </div>
      </ParallaxHero>

      {/* Registration Form */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4">
          <AnimateOnScroll animation="fade-up">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Restaurant Information */}
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl">
                <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Informations sur le restaurant
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-300">
                    Nom du restaurant *
                    </label>
                    <input
                      type="text"
                      name="restaurantName"
                      value={formData.restaurantName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      required
                      placeholder="Enter your restaurant name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-300">
                    Type de restaurant *
                    </label>
                    <select
                      name="restaurantType"
                      value={formData.restaurantType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      required
                    >
                      <option value="">Sélectionnez le type</option>
                      <option value="fast-food">Restauration rapide</option>
                      <option value="casual-dining">Dîner décontracté</option>
                      <option value="fine-dining">Gastronomie</option>
                      <option value="cafe">Café</option>
                      <option value="bakery">Boulangerie</option>
                      <option value="food-truck">Food Truck</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-300">
                     Type de cuisine *
                    </label>
                    <input
                      type="text"
                      name="cuisine"
                      value={formData.cuisine}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      required
                      placeholder="e.g., Italian, Chinese, Mexican"
                    />
                  </div>
                </div>
                <div className="mt-6 space-y-2">
                  <label className="block text-sm font-medium text-slate-300">
                  Description du restaurant
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-vertical"
                    placeholder="Parlez-nous de votre restaurant, de vos spécialités et de ce qui vous rend unique"
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl">
                <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Coordonnées
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-300">
                    Nom du propriétaire/gestionnaire *
                    </label>
                    <input
                      type="text"
                      name="ownerName"
                      value={formData.ownerName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      required
                      placeholder="Full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-300">
                    Adresse email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-300">
                    Numéro de téléphone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      required
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
              </div>

              {/* Location Information */}
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl">
                <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Informations de localisation
                </h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-300">
                    Adresse de la rue *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      required
                      placeholder="123 Main Street"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-300">
                      Ville *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                        required
                        placeholder="City"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-300">
                      État *
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                        required
                        placeholder="State"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-300">
                      Code postal *
                      </label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                        required
                        placeholder="12345"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Information */}
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl">
                <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Informations commerciales
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-300">
                    Numéro de licence commerciale
                    </label>
                    <input
                      type="text"
                      name="businessLicense"
                      value={formData.businessLicense}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="License number"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-300">
                    Numéro d'identification fiscale/EIN
                    </label>
                    <input
                      type="text"
                      name="taxId"
                      value={formData.taxId}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="Tax identification number"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-300">
                    Années en affaires *
                    </label>
                    <select
                      name="yearsInBusiness"
                      value={formData.yearsInBusiness}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      required
                    >
                      <option value="">Select years</option>
                      <option value="less-than-1">Less than 1 year</option>
                      <option value="1-2">1-2 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="6-10">6-10 years</option>
                      <option value="more-than-10">More than 10 years</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-300">
                    Service de livraison actuel
                    </label>
                    <input
                      type="text"
                      name="currentDeliveryService"
                      value={formData.currentDeliveryService}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="e.g., DoorDash, UberEats, None"
                    />
                  </div>
                </div>
              </div>

              {/* Operational Details */}
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl">
                <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Détails opérationnels
                </h3>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-slate-300 mb-4">Heures d'ouverture</h4>
                  <div className="space-y-4">
                    {Object.entries(formData.operatingHours).map(([day, hours]) => (
                      <div key={day} className="flex flex-wrap items-center gap-4 p-4 bg-slate-700 rounded-lg">
                        <div className="min-w-[100px] text-slate-300 capitalize font-medium">
                          {day}
                        </div>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={hours.closed}
                            onChange={(e) => handleOperatingHoursChange(day, 'closed', e.target.checked)}
                            className="w-4 h-4 text-purple-600 bg-slate-600 border-slate-500 rounded focus:ring-purple-500 focus:ring-2"
                          />
                          <span className="text-slate-300 text-sm">Closed</span>
                        </label>
                        {!hours.closed && (
                          <>
                            <input
                              type="time"
                              value={hours.open}
                              onChange={(e) => handleOperatingHoursChange(day, 'open', e.target.value)}
                              className="px-3 py-2 bg-slate-600 border border-slate-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                            <span className="text-slate-400">to</span>
                            <input
                              type="time"
                              value={hours.close}
                              onChange={(e) => handleOperatingHoursChange(day, 'close', e.target.value)}
                              className="px-3 py-2 bg-slate-600 border border-slate-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-300">
                    Rayon de livraison (miles)
                    </label>
                    <select
                      name="deliveryRadius"
                      value={formData.deliveryRadius}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Sélectionnez le rayon</option>
                      <option value="1-3">1-3 miles</option>
                      <option value="3-5">3-5 miles</option>
                      <option value="5-10">5-10 miles</option>
                      <option value="10+">10+ miles</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-300">
                    Valeur moyenne des commandes
                    </label>
                    <select
                      name="averageOrderValue"
                      value={formData.averageOrderValue}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select range</option>
                      <option value="under-15">Under $15</option>
                      <option value="15-25">$15-$25</option>
                      <option value="25-40">$25-$40</option>
                      <option value="40+">$40+</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-300">
                    Volume de commandes mensuel
                    </label>
                    <select
                      name="monthlyOrderVolume"
                      value={formData.monthlyOrderVolume}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Sélectionnez le volume</option>
                      <option value="under-100">Under 100 orders</option>
                      <option value="100-500">100-500 orders</option>
                      <option value="500-1000">500-1000 orders</option>
                      <option value="1000+">1000+ orders</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl">
                <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Informations Complémentaires
                </h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-300">
                    Exigences ou remarques particulières
                    </label>
                    <textarea
                      name="specialRequirements"
                      value={formData.specialRequirements}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-vertical"
                      placeholder="Any special requirements, dietary accommodations, or additional information"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <label className="flex items-center gap-3 cursor-pointer p-4 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors">
                      <input
                        type="checkbox"
                        name="marketingSupport"
                        checked={formData.marketingSupport}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-purple-600 bg-slate-600 border-slate-500 rounded focus:ring-purple-500 focus:ring-2"
                      />
                      <span className="text-slate-300">Je suis intéressé par le soutien marketing et les opportunités promotionnelles</span>
                    </label>
                    
                    <label className="flex items-center gap-3 cursor-pointer p-4 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors">
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleInputChange}
                        required
                        className="w-5 h-5 text-purple-600 bg-slate-600 border-slate-500 rounded focus:ring-purple-500 focus:ring-2"
                      />
                      <span className="text-slate-300">J'accepte les termes et conditions et la politique de confidentialité *</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit Section */}
              <div className="text-center pt-8">
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-500 bg-opacity-20 border border-green-500 rounded-lg">
                    <div className="flex items-center justify-center gap-2 text-green-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-medium">Merci! Votre inscription a bien été enregistrée. Nous vous contacterons prochainement.</span>
                    </div>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-500 bg-opacity-20 border border-red-500 rounded-lg">
                    <div className="flex items-center justify-center gap-2 text-red-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="font-medium">Une erreur s'est produite lors de votre inscription. Veuillez réessayer.</span>
                    </div>
                  </div>
                )}
                
                <Button
                  type="submit"
                  variant="primary"
                  size="xl"
                  disabled={isSubmitting || !formData.agreeToTerms}
                  className={`min-w-[250px] ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Soumission...
                    </>
                  ) : (
                    "Rejoindre la liste d'attente"
                  )}
                </Button>
              </div>
            </form>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}

export default VendorRegistration