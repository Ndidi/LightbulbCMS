import React from "react";
import CMS from 'netlify-cms'
import "netlify-cms/dist/cms.css";

import IndexPagePreview from './preview-templates/IndexPagePreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import DataStoryTellingPagePreview from './preview-templates/DataStoryTellingPagePreview'
import RequestDemoPagePreview from './preview-templates/RequestDemoPagePreview'
import ThankYouPagePreview from './preview-templates/ThankYouPagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import MarketingStoriesPagePreview from './preview-templates/MarketingStoriesPagePreview'
import CustomerStoriesPagePreview from './preview-templates/CustomerStoriesPagePreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('product', ProductPagePreview)
CMS.registerPreviewTemplate('data-storytelling', DataStoryTellingPagePreview)
CMS.registerPreviewTemplate('request-demo', RequestDemoPagePreview)
CMS.registerPreviewTemplate('thank-you', ThankYouPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('marketing-stories', MarketingStoriesPagePreview)
CMS.registerPreviewTemplate('customer-stories', CustomerStoriesPagePreview)