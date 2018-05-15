import React from "react";
import CMS from 'netlify-cms'
import "netlify-cms/dist/cms.css";

import IndexPagePreview from './preview-templates/IndexPagePreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('product', ProductPagePreview)